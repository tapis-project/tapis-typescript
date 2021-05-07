// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Tenants
} from '../src';
import { expect } from 'chai';
import fetch from 'cross-fetch';




describe('Tenants e2e tests', () => {
  // Configure APIs before tests
  const configurationParameters: Tenants.ConfigurationParameters = {
    basePath: process.env.TACC_TENANT,
    fetchApi: fetch
  }
  const configuration: Tenants.Configuration = new Tenants.Configuration(configurationParameters);
  const tenantsApi: Tenants.TenantsApi = new Tenants.TenantsApi(configuration);
  const sitesApi: Tenants.SitesApi = new Tenants.SitesApi(configuration);

  let tenants: Array<Tenants.Tenant>;
  before(async () => {
    // Retrieve a list of tenants before all tests
    const listTenantsRequest: Tenants.ListTenantsRequest = {}
    const response: Tenants.RespListTenants = await tenantsApi.listTenants(listTenantsRequest);
    tenants = response.result;
  });

  it('should retrieve a list of sites', async () => {
    const listSitesRequest: Tenants.ListSitesRequest = {};
    const response: Tenants.RespListSites = await sitesApi.listSites(listSitesRequest);
    expect(response.result.length).to.be.greaterThan(0);
  });

  it('should retrieve a list of tenants', async () => {
    expect(tenants.length).to.be.greaterThan(0);
  });

  it('should retrieve a tenant definition', async() => {
    const tenantId = tenants[0].tenant_id;
    const getTenantRequest: Tenants.GetTenantRequest = { tenantId };
    const getTenantResponse: Tenants.RespGetTenant = await tenantsApi.getTenant(getTenantRequest);
    expect(getTenantResponse.result.tenant_id).to.equal(tenantId);
  });
});