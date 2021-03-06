// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Streams
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';


const projectId = process.env.TEST_PROJECT_ID;
const siteId = process.env.TEST_SITE_ID;
const instId = process.env.TEST_INSTRUMENT_ID;

let projectApi: Streams.ProjectsApi;
let siteApi: Streams.SitesApi;
let instrumentApi: Streams.InstrumentsApi;
let variableApi: Streams.VariablesApi;
let measurmentApi: Streams.MeasurementsApi;

describe('Streams e2e tests', async () => {

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Streams.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token
      },
      fetchApi: fetch
    }
    const configuration: Streams.Configuration = new Streams.Configuration(configurationParameters);
    
    projectApi = new Streams.ProjectsApi(configuration);
    siteApi = new Streams.SitesApi(configuration);
    instrumentApi = new Streams.InstrumentsApi(configuration);
    variableApi = new Streams.VariablesApi(configuration);
    measurmentApi = new Streams.MeasurementsApi(configuration);

  });

  it('should retrieve a list of projects', async () => {
    try {
      const listProjectParams: Streams.ListProjectsRequest = {};

      const projectResponse: Streams.RespListProjects = await projectApi.listProjects(listProjectParams);
      const projects: Array<Streams.Project> = projectResponse.result;
      expect(projects.length).to.be.greaterThanOrEqual(1);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve a list of sites', async () => {
    try {
      const listSiteParams: Streams.ListSitesRequest = {
        projectId: projectId,
      };

      const siteResponse: Streams.RespListSites = await siteApi.listSites(listSiteParams);
      const sites: Array<Streams.Site> = siteResponse.result;
      expect(sites.length).to.be.greaterThanOrEqual(1);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve a list of instruments', async () => {
    try {
      const listInstrumentParams: Streams.ListInstrumentsRequest = {
        projectId: projectId,
        siteId: siteId,
      };

      const instrumentResponse: Streams.RespListInstruments = await instrumentApi.listInstruments(listInstrumentParams);
      const instruments: Array<Streams.Instrument> = instrumentResponse.result;
      expect(instruments.length).to.be.greaterThanOrEqual(1);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve a list of variables', async () => {
    try {
      const listVariableParams: Streams.ListVariablesRequest = {
          projectId: projectId,
          siteId: siteId,
          instId: instId,
      };

      const variableResponse: Streams.RespListVariables = await variableApi.listVariables(listVariableParams);
      const variables: Array<Streams.Variable> = variableResponse.result;
      expect(variables.length).to.be.greaterThanOrEqual(1);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve a list of measurments', async () => {
    try {
      let listMeasurementParams: Streams.ListMeasurementsRequest = {
        projectId: projectId,
        siteId: siteId,
        instId: instId,
      };

      const measurementResponse: Streams.RespListMeasurements = await measurmentApi.listMeasurements(listMeasurementParams);
      const measurements: Streams.Measurements = measurementResponse.result;
      let numberOfValues = 0;
      //filter values to acc
      const nonDataKeys = ["instrument", "site", "measurements_in_files"];
      for(let key in measurements) {
        //check if key is variable
        if(!nonDataKeys.includes(key)) {
          //count number of values in variable and accumulate to numberOfValues
          numberOfValues += Object.keys(measurements[key]).length;
        }
      }
      expect(numberOfValues).to.be.greaterThanOrEqual(1);
    } catch (error) {
      checkJsonError(error);
    }
  });

  it('should retrieve a list of measurments based only on instrument', async () => {
    try {
      let downloadMeasurementParams: Streams.DownloadMeasurementsRequest = {
        instId: instId,
      };

      const measurementDownloadResponse: Streams.RespDownloadMeasurements = await measurmentApi.downloadMeasurements(downloadMeasurementParams);
      const measurementsDownload: Streams.Measurements = measurementDownloadResponse.result;
      let numberOfValues = 0;
      //filter values to acc
      const nonDataKeys = ["instrument", "site", "measurements_in_files"];
      for(let key in measurementsDownload) {
        //check if key is variable
        if(!nonDataKeys.includes(key)) {
          //count number of values in variable and accumulate to numberOfValues
          numberOfValues += Object.keys(measurementsDownload[key]).length;
        }
      }
      expect(numberOfValues).to.be.greaterThanOrEqual(1);
    } catch (error) {
      checkJsonError(error);
    }
  });
});