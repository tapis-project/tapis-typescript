// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Apps
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Apps e2e tests', async () => {
  let configuration: Apps.Configuration;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Apps.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token
      },
      fetchApi: fetch
    }
    configuration = new Apps.Configuration(configurationParameters);
  });

  it('should retrieve an apps', async () => {
    try {
      const api: Apps.ApplicationsApi = new Apps.ApplicationsApi(configuration);
      const getAppsRequest: Apps.GetAppsRequest = {};
      const response: Apps.RespApps = await api.getApps(getAppsRequest);
      const apps: Array<Apps.TapisApp> = response.result;
      expect(apps.length).to.be.greaterThanOrEqual(1)
    } catch (error) {
      checkJsonError(error)
    }
  });

  it('should retrieve the test app', async() => {
    try {
      const api: Apps.ApplicationsApi = new Apps.ApplicationsApi(configuration);
      const getAppRequest: Apps.GetAppRequest = {
        appId: process.env.TEST_APP,
        appVersion: process.env.TEST_APP_VERSION
      }
      const response: Apps.RespApp = await api.getApp(getAppRequest);
      const app: Apps.TapisApp = response.result;
      expect(app.id).to.equal(process.env.TEST_APP);
    } catch (error) {
      checkJsonError(error);
    }
  });
});