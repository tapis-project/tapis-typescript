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
  let submittedJobUuid: string;
  let resubmittedJobUuid: string;

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

  it('should submit a job and cancel', async() => {
    
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const reqSubmitJob: Jobs.ReqSubmitJob = {
        name: process.env.TEST_JOB_NAME,
        appId: process.env.TEST_APP,
        appVersion: process.env.TEST_APP_VERSION,
        execSystemId: process.env.TEST_SYSTEM_ID,
        parameterSet: {
          envVariables: [
            { key: "JOBS_PARMS", value: "500" }
          ],
          archiveFilter: {
            includes: ["Sleep*"],
            includeLaunchFiles: true
          }
        },
        archiveSystemId: process.env.TEST_SYSTEM_ID,
        tags: ["e2e", "tapis-typescript"]
      };

      const response: Jobs.RespSubmitJob = await api.submitJob({
        reqSubmitJob
      });
      const job: Jobs.Job = response.result;
      console.info("Submitted job uuid = ", job.uuid);
      
      submittedJobUuid = job.uuid;

      // SLEEP for 2 seconds to allow job to start
      await new Promise(resolve => setTimeout(resolve, 2000));
      const statusReq: Jobs.GetJobStatusRequest = {
        jobUuid: job.uuid
      };
      const statusResponse: Jobs.RespGetJobStatus = await api.getJobStatus(statusReq);
      const jobStatus: Jobs.JobStatusDisplay = statusResponse.result;
      console.info("Job status", jobStatus);
      expect(Object.values(Jobs.JobStatusEnum)).to.include(jobStatus.status);


      // Use the saved job UUID
      const cancelReq: Jobs.CancelJobRequest = {
        jobUuid: submittedJobUuid
      };
      const cancelResp = await api.cancelJob(cancelReq);
      console.info("Cancelling result: ", cancelResp.result);
      expect(cancelResp.result?.message?.includes("has been accepted") === true).to.equal(true);

      // SLEEP for 2 seconds to allow job to start
      await new Promise(resolve => setTimeout(resolve, 2000));
      

      // Fetch status of the cancelled job
      const getCancelledJobReq: Jobs.GetJobRequest = {
        jobUuid: submittedJobUuid
      };
      const getCancelledJobResp: Jobs.RespGetJob = await api.getJob(getCancelledJobReq);
      console.info("Cancelled Job ", getCancelledJobResp.result?.uuid, " condition: ", 
        getCancelledJobResp.result?.condition, " visibility: ", getCancelledJobResp.result?.visible);
      expect(getCancelledJobResp.result.condition).to.equal(Jobs.JobConditionEnum.CancelledByUser);
      expect(Object.values(Jobs.JobConditionEnum)).to.include(getCancelledJobResp.result.condition);
      expect(Object.values(Jobs.JobStatusEnum)).to.include(getCancelledJobResp.result.status);
      expect(getCancelledJobResp.result.visible).to.equal(true);
      console.info("job ", submittedJobUuid, " successfully cancelled");
    
  });

  // RESUBMIT, 
  it('it should resubmit a job', async() => {
    
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      // Use the saved job UUID
      const resubmitReq: Jobs.ResubmitJobRequest = {
        jobUuid: submittedJobUuid
      };
      const response = await api.resubmitJob(resubmitReq);
      const job: Jobs.Job = response.result;
      resubmittedJobUuid = job.uuid;
      expect(resubmittedJobUuid).to.not.equal(submittedJobUuid);

      // SLEEP for 2 seconds to allow job to start
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Fetch status of the resubmitted job
      const getJobReq: Jobs.GetJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const getJobResp: Jobs.RespGetJob = await api.getJob(getJobReq);
      const getJobResult: Jobs.Job = getJobResp.result;
      console.info("Resubmitted Job uuid = ", getJobResult.uuid, " condition=", getJobResult.condition, " visibility=", getJobResult.visible);
      expect(Object.values(Jobs.JobStatusEnum)).to.include(getJobResult.status);
      expect(getJobResult.visible).to.equal(true);
      console.info("job ", resubmittedJobUuid, " successfully resubmitted");
    
  });
  // CANCEL, 
  it('should cancel a job', async() => {
    
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      // Use the saved job UUID
      const cancelReq: Jobs.CancelJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const cancelResp = await api.cancelJob(cancelReq);
      console.info("Cancelling result: ", cancelResp.result);
      expect(cancelResp.result?.message?.indexOf("has been accepted") > 0).to.equal(true);

      // SLEEP for 2 seconds to allow job to start
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Fetch status of the cancelled job
      const getCancelledJobReq: Jobs.GetJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const getCancelledJobResp: Jobs.RespGetJob = await api.getJob(getCancelledJobReq);
      console.info("Cancelled Job ", getCancelledJobResp.result?.uuid, " condition: ", 
        getCancelledJobResp.result?.condition, " visibility: ", getCancelledJobResp.result?.visible);
      expect(getCancelledJobResp.result.condition).to.equal(Jobs.JobConditionEnum.CancelledByUser);
      expect(Object.values(Jobs.JobStatusEnum)).to.include(getCancelledJobResp.result.status);
      expect(getCancelledJobResp.result.visible).to.equal(true);
      console.info("Resubmitted job ", resubmittedJobUuid, " successfully cancelled");

    
  });
  // HIDE,
  it('should hide a job', async() => {
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const hideReq: Jobs.HideJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const hideResp = await api.hideJob(hideReq);
      console.info("Hidden job: ", hideResp.result.message);

      // Verify the job is now hidden
      const getHiddenJobReq: Jobs.GetJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const getHiddenJobResp: Jobs.RespGetJob = await api.getJob(getHiddenJobReq);
      const getHiddenJobResult: Jobs.Job = getHiddenJobResp.result;
      console.info("Hidden Job visibility", getHiddenJobResult.visible);
      expect(getHiddenJobResult.visible).to.equal(false);
  });
  // UNHIDE

  it('should unhide a job', async() => {
      const api: Jobs.JobsApi = new Jobs.JobsApi(configuration);
      const unhideReq: Jobs.UnhideJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const unhideResp = await api.unhideJob(unhideReq);
      console.info("Unhidden job: ", unhideResp.result.message);

      // Verify the job is now visible
      const getUnhiddenJobReq: Jobs.GetJobRequest = {
        jobUuid: resubmittedJobUuid
      };
      const getUnhiddenJobResp: Jobs.RespGetJob = await api.getJob(getUnhiddenJobReq);
      const getUnhiddenJobResult: Jobs.Job = getUnhiddenJobResp.result;
      console.info("Unhidden Job visibility", getUnhiddenJobResult.visible);
      expect(getUnhiddenJobResult.visible).to.equal(true);
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