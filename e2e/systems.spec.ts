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

describe('Systems e2e tests', async () => {
  // Test system
  const system: any = {
    "id": process.env.TEST_SYSTEM_ID,
    "description": "Systems for testing large files transfers",
    "systemType": Systems.SystemTypeEnum.Linux,
    "host": "129.114.17.47",
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
      if (response.result.url.includes(process.env.TEST_SYSTEM_ID)) {
        console.log("Test system created:", process.env.TEST_SYSTEM_ID);       
      }
    } catch(error) {
      console.warn("Error while creating test system, attempting to update instead", await error.json());
      try {
        const reqUpdateSystem: Systems.ReqUpdateSystem = Systems.ReqUpdateSystemFromJSON(system);
        const request: Systems.UpdateSystemRequest = {
          systemId: process.env.TEST_SYSTEM_ID,
          reqUpdateSystem
        }
        const updateResponse: Systems.RespResourceUrl = await api.updateSystem(request);  
        if (updateResponse.result.url.includes(process.env.TEST_SYSTEM_ID)) {
          console.log("Test system updated:", process.env.TEST_SYSTEM_ID);
        }
      } catch (updateError) {
        console.warn("Could not update test system", await updateError.json());
      }
    }
  });

  it('should retrieve a list of systems that contains the test system', async () => {
    const systemsRequest: Systems.GetSystemsRequest = {};
    const systemsResponse: Systems.RespSystems = await api.getSystems(systemsRequest);
    const systems: Array<Systems.TapisSystem> = systemsResponse.result;
    expect(
      systems.filter(system => system.id === process.env.TEST_SYSTEM_ID).length
    ).to.be.greaterThanOrEqual(1)
  });

  it('should retrieve the test system', async () => {
    const systemRequest: Systems.GetSystemRequest = {
      systemId: process.env.TEST_SYSTEM_ID
    }
    const systemResponse: Systems.RespSystem = await api.getSystem(systemRequest);
    const system: Systems.TapisSystem = systemResponse.result;
    expect(system.id).to.equal(process.env.TEST_SYSTEM_ID);
  });

  it('should update a system', async () => {
    const reqUpdateSystem: Systems.ReqUpdateSystem = Systems.ReqUpdateSystemFromJSON(system);
    reqUpdateSystem.description = "updated description";
    const request: Systems.UpdateSystemRequest = {
      systemId: process.env.TEST_SYSTEM_ID,
      reqUpdateSystem
    }
    try {
      const updateResponse: Systems.RespResourceUrl = await api.updateSystem(request);
      expect(updateResponse.result.url).to.contain(process.env.TEST_SYSTEM_ID)
      const systemRequest: Systems.GetSystemRequest = {
        systemId: process.env.TEST_SYSTEM_ID
      }
      const systemResponse: Systems.RespSystem = await api.getSystem(systemRequest);
      const system: Systems.TapisSystem = systemResponse.result;
      expect(system.description).to.equal("updated description");
    } catch (error) {
      const errorBody = await error.json();
      throw errorBody;
    }
  });
});