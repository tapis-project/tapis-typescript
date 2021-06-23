// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Jobs
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Jobs e2e tests', async () => {
  let configuration: Jobs.Configuration;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Jobs.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token
      },
      fetchApi: fetch
    }
    configuration = new Jobs.Configuration(configurationParameters);
  });

  it('should submit a job', async() => {
    try {
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const reqSubmitJob: Jobs.ReqSubmitJob = {
        name: process.env.TEST_JOB_NAME,
        appId: process.env.TEST_APP,
        appVersion: process.env.TEST_APP_VERSION,
        execSystemId: process.env.TEST_SYSTEM_ID
      }
      const response: Jobs.RespSubmitJob = await api.submitJob({
        reqSubmitJob
      });
      const job: Jobs.Job = response.result;
      console.info("Submitted job uuid", job.uuid);
      const statusReq: Jobs.GetJobStatusRequest = {
        jobUuid: job.uuid
      };
      const statusResponse: Jobs.RespGetJobStatus = await api.getJobStatus(statusReq);
      const jobStatus: Jobs.JobStatusDisplay = statusResponse.result;
      console.info("Job status", jobStatus);
      expect(jobStatus.status in Jobs.JobStatusEnum).to.equal(true);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should get a job listing', async() => {
    try {
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const request: Jobs.GetJobListRequest = {};
      const response: Jobs.RespGetJobList = await api.getJobList(request);
      const jobs: Array<Jobs.JobListDTO> = response.result;
      expect(jobs.length).to.be.greaterThanOrEqual(1);
    } catch(error) {
      checkJsonError(error);
    }
  });
});