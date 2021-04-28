// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Systems
} from '../src';
import getToken from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';
import { ReqCreateSystemFromJSON } from '@tapis/tapis-typescript-systems/src';
import { UpdateSystemRequest } from '@tapis/tapis-typescript-systems';

describe('Systems e2e tests', async () => {
  // Test system
  const system: any = {
    "id": process.env.TEST_SYSTEM_ID,
    "description": "Systems for testing large files transfers",
    "systemType": Systems.SystemTypeEnum.Linux,
    "host": "129.114.17.47",
    "enabled": true,
    "effectiveUserId": "testuser2",
    "defaultAuthnMethod": Systems.AuthnEnum.PkiKeys,
    "authnCredential": {
      "privateKey": "pk for testuser2",
      "publicKey": "pub key for testuser2"
    },
    "rootDir": "/home/testuser2/",
    "port": 22,
    "canExec": false
  }
  let api: Systems.SystemsApi;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Systems.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token
      },
      fetchApi: fetch
    }
    const configuration: Systems.Configuration = new Systems.Configuration(configurationParameters);
    api = new Systems.SystemsApi(configuration);

    // Create a test system
    try {
      const request: Systems.CreateSystemRequest = {
        reqCreateSystem: Systems.ReqCreateSystemFromJSON(system)
      }
      const response: Systems.RespResourceUrl = await api.createSystem(request);
    } catch(error) {
      console.warn("Error while creating test system", await error.json());
    }
  });

  it('should retrieve a list of systems', async () => {
    const systemsRequest: Systems.GetSystemsRequest = {};
    const systemsResponse: Systems.RespSystemsArray = await api.getSystems(systemsRequest);
    const systems: Array<Systems.TSystem> = systemsResponse.result;
    expect(
      systems.filter(system => system.id === process.env.TEST_SYSTEM_ID).length
    ).to.equal(1)
  });

  it('should retrieve the test system', async () => {
    const systemRequest: Systems.GetSystemRequest = {
      systemId: process.env.TEST_SYSTEM_ID
    }
    const systemResponse: Systems.RespSystem = await api.getSystem(systemRequest);
    const system: Systems.TSystem = systemResponse.result;
    expect(system.id).to.equal(process.env.TEST_SYSTEM_ID);
  });

  it('should update a system', async () => {
    const reqUpdateSystem: Systems.ReqUpdateSystem = Systems.ReqUpdateSystemFromJSON(system);
    reqUpdateSystem.description = "updated description";
    const request: UpdateSystemRequest = {
      systemId: process.env.TEST_SYSTEM_ID,
      reqUpdateSystem
    }
    try {
      const response: Systems.RespResourceUrl = await api.updateSystem(request);
    } catch (error) {
      const errorBody = await error.json();
      throw errorBody;
    }
  });

  it('should delete a system', async () => {
    try {
      const request: Systems.DeleteSystemRequest = {
        systemId: process.env.TEST_SYSTEM_ID
      }
      const response: Systems.RespChangeCount = await api.deleteSystem(request);
    } catch (error) {
      const errorBody = await error.json();
      throw errorBody;
    }
  });
});