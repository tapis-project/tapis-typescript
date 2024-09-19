// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Workflows
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

const groupId: string = process.env.TEST_WORKFLOWS_GROUP_ID
const idPrefix: string = process.env.TEST_WORKLFOWS_ID_PREFIX

let archivesApi: Workflows.ArchivesApi;
let cicdApi: Workflows.CICDApi;
let etlApi: Workflows.ETLApi;
let generalApi: Workflows.GeneralApi;
let groupsApi: Workflows.GroupsApi;
let identitiesApi: Workflows.IdentitiesApi;
let pipelineArchivesApi: Workflows.PipelineArchivesApi;
let pipelineRunsApi: Workflows.PipelineRunsApi;
let pipelinesApi: Workflows.PipelinesApi; // Need to create a pipeline run with task executions
let secretsApi: Workflows.SecretsApi;
let groupSecretsApi: Workflows.GroupSecretsApi;
let taskExecutionsApi: Workflows.TaskExecutionsApi; // # Not testable without the X-Workflow-Executor-Token
let pipelineLocksApi: Workflows.PipelineLocksApi
let tasksApi: Workflows.TasksApi;
let usersApi: Workflows.UsersApi;

const id = (value: string) => {
  return idPrefix + "-" + value
}

describe('Workflows e2e tests', async () => {

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Workflows.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-TAPIS-TOKEN": token.access_token!
      },
      fetchApi: fetch
    }
    const configuration: Workflows.Configuration = new Workflows.Configuration(configurationParameters);
    
    archivesApi = new Workflows.ArchivesApi(configuration);
    cicdApi = new Workflows.CICDApi(configuration);
    etlApi = new Workflows.ETLApi(configuration);
    generalApi = new Workflows.GeneralApi(configuration);
    groupsApi = new Workflows.GroupsApi(configuration);
    identitiesApi = new Workflows.IdentitiesApi(configuration);
    pipelineArchivesApi = new Workflows.PipelineArchivesApi(configuration);
    pipelineRunsApi = new Workflows.PipelineRunsApi(configuration);
    pipelinesApi = new Workflows.PipelinesApi(configuration);
    pipelineLocksApi = new Workflows.PipelineLocksApi(configuration);
    secretsApi = new Workflows.SecretsApi(configuration);
    groupSecretsApi = new Workflows.GroupSecretsApi(configuration);
    taskExecutionsApi = new Workflows.TaskExecutionsApi(configuration);
    tasksApi = new Workflows.TasksApi(configuration);
    usersApi = new Workflows.UsersApi(configuration);
  });

  it("should persist all the data necessary for this test", async () => {
    // Create all the data required for the tests
    try {
      const createGroupParams: Workflows.CreateGroupRequest = {
        reqGroup: {id: id("group")}
      };

      await groupsApi.createGroup(createGroupParams);
    } catch {}

    try {
      const createArchiveParams: Workflows.CreateArchiveRequest = {
        groupId: id("group"),
        reqArchive: {
          id: id("archive"),
          type: Workflows.EnumArchiveType.System,
          system_id: "nathandf.test.ls6.shade",
          archive_dir: "workflows/archive/"
        }
      }

      await archivesApi.createArchive(createArchiveParams)
    } catch (error) {
    }

    try {
      const createPipelineParams: Workflows.CreatePipelineRequest = {
        groupId: id("group"),
        reqPipeline: {
          id: id("pipeline"),
          type: Workflows.EnumPipelineType.Workflow,
          archive_ids: [id("archive")],
          tasks: [
            {
              id: id("task1-request"),
              type: Workflows.EnumTaskType.Request,
              http_method: Workflows.EnumHTTPMethod.Get,
              url: "example.com",
            },
            {
              id: id("task2-image-build"),
              type: Workflows.EnumTaskType.ImageBuild,
              builder: Workflows.EnumBuilder.Kaniko,
              context: {
                type: Workflows.EnumContextType.Github,
                visibility: Workflows.EnumContextVisibility.Private,
                url: "dockerhub.io/my/repo",
                branch: "main",
                build_file_path: "/src",
                credentials: {
                  personal_access_token: "123",
                  username: "test"
                }
              },
              destination: {
                type: Workflows.EnumDestinationType.Local
              }
            },
            // NOTE Uncomment to ensure there are no type errors.
            // TODO Remove comments when these task types are fully implemented
            {
              id: id("task3-application"),
              type: Workflows.EnumTaskType.Application,
              image: "my/image"
            },
            {
              id: id("task4-function"),
              type: Workflows.EnumTaskType.Function,
              runtime: Workflows.EnumRuntimeEnvironment.Python39,
              installer: Workflows.EnumInstaller.Pip,
              code: ""
            },
            {
              id: id("task5-tapis-job"),
              type: Workflows.EnumTaskType.TapisJob,
              tapis_job_def: {}
            },
            {
              id: id("task5-tapis-actor"),
              type: Workflows.EnumTaskType.TapisActor,
              tapis_actor_id: "my-actor-id"
            }
          ]
        }
      }

      await pipelinesApi.createPipeline(createPipelineParams)
    } catch (error){
    }

    try {
      const createCIPipelineParams: Workflows.CreateCIPipelineRequest = {
        groupId: id("group"),
        reqCIPipeline: {
          id: id("ci-pipeline"),
          type: Workflows.EnumPipelineType.Workflow,
          archive_ids: [id("archive")],
          builder: Workflows.EnumBuilder.Kaniko,
          context: {
            type: Workflows.EnumContextType.Dockerhub,
            visibility: Workflows.EnumContextVisibility.Private,
            url: "dockerhub.io/my/repo",
          },
          destination: {
            type: Workflows.EnumDestinationType.Dockerhub,
            url: "my/repo",
            credentials: {
              token: "mytoken123",
              username: "myusername"
            }
          }
        }
      }

      await cicdApi.createCIPipeline(createCIPipelineParams)
    } catch (error){
    }

    try {
      const createIdentityParams: Workflows.CreateIdentityRequest = {
        reqIdentity: {
          name: id("identity"),
          type: Workflows.EnumIdentityType.Dockerhub,
          credentials: {
            username: "test",
            token: "test"
          }
        }
      }

      await identitiesApi.createIdentity(createIdentityParams)
    } catch {}

    try {
      const createSecretParams: Workflows.CreateSecretRequest = {
        reqCreateSecret: {
          id: id("secret"),
          description: "Secret generated by the tapis-typescript e2e test",
          data: "mysupersecret" as unknown as any // TODO remove typecast when tapis typescript is updated to have the data property as type 'string'
        }
      }

      console.log(createSecretParams.reqCreateSecret.data)
      await secretsApi.createSecret(createSecretParams)
    } catch (e) {
      console.log({e})
    }

    try {
      const createGroupSecretParams: Workflows.AddGroupSecretRequest = {
        groupId: id("group"),
        reqGroupSecret: {
          id: id("group-secret"),
          secret_id: id("secret")
        }
      }

      await groupSecretsApi.addGroupSecret(createGroupSecretParams)
    } catch (e) {
      console.log({e})
    }
  });

  it("should return a healthcheck object", async () => {
    let healthCheckResp = await generalApi.healthCheck()
    
    expect(healthCheckResp.result).not.equal(null);
  })

  it("should list one or more groups", async () => {
    let groupListResp: Workflows.RespGroupList = await groupsApi.listGroups()
    
    expect(groupListResp.result.length).greaterThanOrEqual(1);
  });
  
  it("should list one or more pipelines", async () => {
    let listPipelineParams: Workflows.ListPipelinesRequest = {
      groupId: id("group")
    }
    let pipelinesListResp: Workflows.RespPipelineList = await pipelinesApi.listPipelines(listPipelineParams)
    expect(pipelinesListResp.result.length).greaterThanOrEqual(1);
  });

  it("should list one or more archives", async () => {
    let listArchivesParams: Workflows.ListArchivesRequest = {
      groupId: id("group")
    }
    let archiveListResp: Workflows.RespArchiveList = await archivesApi.listArchives(listArchivesParams)
    
    expect(archiveListResp.result.length).greaterThanOrEqual(1);
  });

  it(`should list 1 archive for pipeline ${id("pipeline")}`, async () => {
    let listPipelineArchivesParams: Workflows.ListPipelineArchivesRequest = {
      groupId: id("group"),
      pipelineId: id("pipeline")
    }
    let pipelineArchiveListResp: Workflows.RespArchiveList = await pipelineArchivesApi.listPipelineArchives(listPipelineArchivesParams)
    
    expect(pipelineArchiveListResp.result.length).equals(1);
  });

  it(`should list 6 tasks from the '${id("pipeline")}' pipeline`, async () => {
    let listTasksParams: Workflows.ListTasksRequest = {
      groupId: id("group"),
      pipelineId: id("pipeline")
    }
    let taskListResp: Workflows.RespTaskList = await tasksApi.listTasks(listTasksParams)
    
    expect(taskListResp.result.length).equals(6);
  });

  it(`should list 0 pipeline runs for the '${id("pipeline")}' pipeline`, async () => {
    let listPipelineRunsParams: Workflows.ListPipelineRunsRequest = {
      groupId: id("group"),
      pipelineId: id("pipeline")
    }
    let pipelineRunListResp: Workflows.RespPipelineRunList = await pipelineRunsApi.listPipelineRuns(listPipelineRunsParams)
    
    expect(pipelineRunListResp.result.length).equals(0);
  });

  it(`should list 1 user for the '${id("group")}' group`, async () => {
    let listGroupUsersParams: Workflows.ListGroupUsersRequest = {
      groupId: id("group")
    }
    let groupUserListResp: Workflows.RespGroupUserList = await usersApi.listGroupUsers(listGroupUsersParams)
    
    expect(groupUserListResp.result.length).equals(1);
  });

  it(`should return a list of secrets that contains the e2e secret`, async () => {
    let secretListResp: Workflows.RespSecretList = await secretsApi.listSecrets()
    const e2eSecrets = secretListResp.result.filter(secret => secret.id === id("secret"))
    expect(e2eSecrets.length).equals(1);
  });

  it(`should return a list of group secrets that contains the e2e group secret`, async () => {
    let groupSecretListResp: Workflows.RespGroupSecretList = await groupSecretsApi.listGroupSecrets({
      groupId: id("group")
    } as Workflows.ListGroupSecretsRequest)
    const e2eGroupSecrets = groupSecretListResp.result.filter(gs => gs.id === id("group-secret"))
    expect(e2eGroupSecrets.length).equals(1);
  });

  it(`should ? 1 ETL pipeline`, async () => {
    
  });
});