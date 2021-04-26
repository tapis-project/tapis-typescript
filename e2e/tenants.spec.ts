// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { 
  Tenants
} from '../src';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Tenants e2e tests', () => {
  it('should retrieve a list of sites', async () => {
    const configurationParameters: Tenants.ConfigurationParameters = {
      basePath: process.env.TACC_TENANT,
      fetchApi: fetch
    }
    const configuration: Tenants.Configuration = new Tenants.Configuration(configurationParameters);
    const api: Tenants.SitesApi = new Tenants.SitesApi(configuration);
    const listSitesRequest: Tenants.ListSitesRequest = {};
    const response = await api.listSites(listSitesRequest);
    expect(response).to.have.property("result");
  });
});