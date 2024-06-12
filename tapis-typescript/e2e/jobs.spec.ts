// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { Jobs } from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

let testJobUuid: string;
const jobStatusEnumStatus: string[] = Object.values(Jobs.JobStatusEnum);

describe('Jobs e2e tests', async () => {
  let configuration: Jobs.Configuration;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Jobs.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        'X-Tapis-Token': token.access_token,
      },
      fetchApi: fetch,
    };
    configuration = new Jobs.Configuration(configurationParameters);
  });

  it('should submit a job', async () => {
    try {
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const reqSubmitJob: Jobs.ReqSubmitJob = {
        name: process.env.TEST_JOB_NAME,
        appId: process.env.TEST_APP,
        appVersion: process.env.TEST_APP_VERSION,
        execSystemId: process.env.TEST_SYSTEM_ID,
      };
      const response: Jobs.RespSubmitJob = await api.submitJob({
        reqSubmitJob,
      });
      const job: Jobs.Job = response.result;
      console.info('Submitted job uuid', job.uuid);
      const statusReq: Jobs.GetJobStatusRequest = {
        jobUuid: job.uuid,
      };
      const statusResponse: Jobs.RespGetJobStatus = await api.getJobStatus(
        statusReq
      );
      const jobStatus: Jobs.JobStatusDisplay = statusResponse.result;
      if (jobStatus.status === undefined) {
        throw new Error('Job status is undefined');
      }
      expect(jobStatus.status).to.be.oneOf(jobStatusEnumStatus);
      testJobUuid = job.uuid;
      console.info('Test job uuid', testJobUuid);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it('should get a job listing', async () => {
    try {
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const request: Jobs.GetJobListRequest = {};
      const response: Jobs.RespGetJobList = await api.getJobList(request);
      const jobs: Array<Jobs.JobListDTO> = response.result;
      expect(jobs.length).to.be.greaterThanOrEqual(1);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  //test subscription api
  it('should subscribe to a job', async () => {
    try {
      const api: Jobs.SubscriptionsApi = new Jobs.SubscriptionsApi(
        configuration
      );

      const notifDeliveryTarget: Jobs.NotifDeliveryTarget = {
        deliveryMethod: Jobs.NotifDeliveryTargetDeliveryMethodEnum.Webhook,
        deliveryAddress: process.env.TEST_WEBHOOK_URL,
      };

      const body: Jobs.ReqSubscribe = {
        description: 'Test subscription',
        enabled: true,
        eventCategoryFilter:
          Jobs.ReqSubscribeEventCategoryFilterEnum.JobNewStatus,
        deliveryTargets: [notifDeliveryTarget],
      };

      const request: Jobs.SubscribeRequest = {
        jobUuid: testJobUuid,
        reqSubscribe: body,
      };
      const { result: subscription }: Jobs.RespResourceUrl =
        await api.subscribe(request);
      if (subscription === undefined) {
        throw new Error('Subscription URL is undefined');
      } else {
        expect(subscription).to.not.be.undefined;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  //test subscription api - getSubscriptions
  it('should get subscriptions for a job', async () => {
    try {
      const api: Jobs.SubscriptionsApi = new Jobs.SubscriptionsApi(
        configuration
      );
      //The previous test should have created a subscription for the job so we should find it
      const subscriptions: Jobs.TapisSubscription[] =
        await getSubscriptionsByJobUuid(api, testJobUuid);
      const subscription = subscriptions.find(
        (subscription) => subscription.subjectFilter === testJobUuid
      );
      expect(subscription).to.not.be.undefined;
      expect(subscription?.subjectFilter).to.equal(testJobUuid);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.skip('should delete subscriptions for a job using subscriptionId', async () => {
    try {
      const api: Jobs.SubscriptionsApi = new Jobs.SubscriptionsApi(
        configuration
      );
      //The previous test should have created a subscription for the job so we should find it
      const subscriptions: Jobs.TapisSubscription[] =
        await getSubscriptionsByJobUuid(api, testJobUuid);
      const subscription = subscriptions.find(
        (subscription) => subscription.subjectFilter === testJobUuid
      );
      expect(subscription).to.not.be.undefined;
      if (subscription === undefined || subscription.uuid === undefined) {
        throw new Error('Subscription to delete is undefined');
      }
      // Delete the subscription
      const request: Jobs.DeleteSubscriptionsRequest = {
        uuid: subscription?.uuid,
      };
      const response: Jobs.ResultChangeCount = await api.deleteSubscriptions(
        request
      );

      console.info('Deleted subscriptions', response.changes);
      expect(response.changes).to.be.greaterThanOrEqual(1);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});

async function getSubscriptionsByJobUuid(
  api: Jobs.SubscriptionsApi,
  jobUuid: string
) {
  const request: Jobs.GetSubscriptionsRequest = {
    jobUuid: jobUuid,
  };
  const response: Jobs.RespGetSubscriptions = await api.getSubscriptions(
    request
  );
  const subscriptions: Jobs.TapisSubscription[] | undefined = response.result;
  if (subscriptions === undefined) {
    throw new Error('Subscriptions are undefined');
  }
  return subscriptions;
}
