// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Systems
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Systems e2e tests', async () => {
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
  });

  it('should retrieve a list of systems', async () => {
    try {
      const systemsRequest: Systems.GetSystemsRequest = {};
      const systemsResponse: Systems.RespSystems = await api.getSystems(systemsRequest);
      const systems: Array<Systems.TapisSystem> = systemsResponse.result;
      expect(systems.length).to.be.greaterThanOrEqual(1)
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve the test system', async () => {
    try {
      const systemRequest: Systems.GetSystemRequest = {
        systemId: process.env.TEST_SYSTEM_ID
      }
      const systemResponse: Systems.RespSystem = await api.getSystem(systemRequest);
      const system: Systems.TapisSystem = systemResponse.result;
      expect(system.id).to.equal(process.env.TEST_SYSTEM_ID);
    } catch (error) {
      checkJsonError(error);
    }
  });
});