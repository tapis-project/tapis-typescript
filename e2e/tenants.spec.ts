// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { 
  Tenants
} from '../src';
import { expect } from 'chai';
import fetch from 'cross-fetch';




describe('Tenants e2e tests', () => {
  // Tenants configuration for all tests
  const configurationParameters: Tenants.ConfigurationParameters = {
    basePath: process.env.TACC_TENANT,
    fetchApi: fetch
  }
  const configuration: Tenants.Configuration = new Tenants.Configuration(configurationParameters);

  // Utility function to get tenants
  const getTenants = async (): Promise<Array<Tenants.Tenant>> => {
    const api: Tenants.TenantsApi = new Tenants.TenantsApi(configuration);
    const listTenantsRequest: Tenants.ListTenantsRequest = {}
    const response: Tenants.RespListTenants = await api.listTenants(listTenantsRequest);
    return response.result;
  }

  it('should retrieve a list of sites', async () => {
    const api: Tenants.SitesApi = new Tenants.SitesApi(configuration);
    const listSitesRequest: Tenants.ListSitesRequest = {};
    const response: Tenants.RespListSites = await api.listSites(listSitesRequest);
    expect(response.result.length).to.be.greaterThan(0);
  });

  it('should retrieve a list of tenants', async () => {
    const tenants: Array<Tenants.Tenant> = await getTenants();
    expect(tenants.length).to.be.greaterThan(0);
  });
  
  it('should retrieve a tenant definition', async() => {
    const api: Tenants.TenantsApi = new Tenants.TenantsApi(configuration);
    const tenants: Array<Tenants.Tenant> = await getTenants();
    const tenantId = tenants[0].tenant_id;
    const getTenantRequest: Tenants.GetTenantRequest = { tenantId };
    const getTenantResponse: Tenants.RespGetTenant = await api.getTenant(getTenantRequest);
    expect(getTenantResponse.result.tenant_id).to.equal(tenantId);
  });
});