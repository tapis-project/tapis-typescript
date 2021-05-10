// Load e2e environment variables into process.env
require('dotenv').config({ path: 'example.env' });
const fetch = require('node-fetch');

import { Tenants } from '@tapis/tapis-typescript';


const configurationParameters: Tenants.ConfigurationParameters = {
  basePath: process.env.TACC_TENANT,
  fetchApi: fetch
}
const configuration: Tenants.Configuration = new Tenants.Configuration(configurationParameters);
const tenantsApi: Tenants.TenantsApi = new Tenants.TenantsApi(configuration);
const sitesApi: Tenants.SitesApi = new Tenants.SitesApi(configuration);
const listTenantsRequest: Tenants.ListTenantsRequest = {}
const responsePromise: Promise<Tenants.RespListTenants> = tenantsApi.listTenants(listTenantsRequest);
responsePromise.then(
  (response: Tenants.RespListTenants) => {
    const tenants: Array<Tenants.Tenant> = response.result
    console.log(tenants);
  }
)
