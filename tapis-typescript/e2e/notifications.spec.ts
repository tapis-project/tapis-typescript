// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { Jobs, Notifications } from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Notifications e2e tests', async () => {
  let notificationConfiguration: Notifications.Configuration;
  let jobConfiguration: Jobs.Configuration;
  let jobUuid: string;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const notificationConfigurationParameters: Notifications.ConfigurationParameters =
      {
        basePath: process.env.TEST_TENANT,
        headers: {
          'X-Tapis-Token': token.access_token,
        },
        fetchApi: fetch,
      };
    const jobConfigurationParameters: Jobs.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        'X-Tapis-Token': token.access_token,
      },
      fetchApi: fetch,
    };
    notificationConfiguration = new Notifications.Configuration(
      notificationConfigurationParameters
    );
    jobConfiguration = new Jobs.Configuration(jobConfigurationParameters);
  });

  it('should submit a job', async () => {
    try {
      const api: Jobs.JobsApi = new Jobs.JobsApi(jobConfiguration);
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
      console.info('Job status', jobStatus);
      console.log(job.uuid);
      jobUuid = job.uuid;
      expect(jobStatus.status in Jobs.JobStatusEnum).to.equal(true);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should create a subscription', async () => {
    try {
      const api: Notifications.SubscriptionsApi =
        new Notifications.SubscriptionsApi(notificationConfiguration);

      const deliveryTarget: Notifications.DeliveryTarget = {
        deliveryMethod: Notifications.DeliveryMethod.Webhook,
        deliveryAddress: 'https://example.com/webhook',
      };
      const reqSubmitSubscription: Notifications.ReqPostSubscription = {
        typeFilter: 'jobs.JOB_NEW_STATUS.*',
        subjectFilter: jobUuid,
        deliveryTargets: [deliveryTarget],
      };
      const createSubscriptionRequest: Notifications.PostSubscriptionRequest = {
        reqPostSubscription: reqSubmitSubscription,
      };
      const response: Notifications.RespResourceUrl =
        await api.postSubscription(createSubscriptionRequest);
      expect(response.result).not.be.undefined;
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve a file listing on the test system', async () => {
    try {
      const api: Notifications.SubscriptionsApi =
        new Notifications.SubscriptionsApi(notificationConfiguration);
      const listNotificationsRequest: Notifications.GetSubscriptionsRequest = {
        ownedBy: process.env.TEST_USER,
      };
      const response: Notifications.RespSubscriptions =
        await api.getSubscriptions(listNotificationsRequest);
      const subscriptions: Notifications.TapisSubscription[] | undefined =
        response.result;
      expect(subscriptions).not.be.undefined;
      console.log(subscriptions);
      if (subscriptions !== undefined) {
        expect(subscriptions.length).to.be.equal(0);
      }
    } catch (error) {
      checkJsonError(error);
    }
  });
});
