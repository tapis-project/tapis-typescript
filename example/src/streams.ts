
// Load e2e environment variables into process.env
require('dotenv').config({ path: 'example.env' });
const fetch = require('node-fetch');
import { getToken, checkJsonError } from '../../tapis-typescript/e2e/utils';
import { Authenticator, Streams } from '@tapis/tapis-typescript';


(async function() {
    try {
        const token: Authenticator.NewAccessTokenResponse = await getToken();
        console.log(process.env.TEST_TENANT);
        // Configure the client to use the retrieved JWT as the "X-Tapis-Token" authentication header
        const configurationParameters: Streams.ConfigurationParameters = {
            basePath: process.env.TEST_TENANT,
            headers: {
                "X-Tapis-Token": token.access_token
            },
            fetchApi: fetch
        }
        
        const configuration: Streams.Configuration = new Streams.Configuration(configurationParameters);
        //APIs
        const healthApi: Streams.HealthApi = new Streams.HealthApi(configuration);
        const projectApi: Streams.ProjectsApi = new Streams.ProjectsApi(configuration);
        const siteApi: Streams.SitesApi = new Streams.SitesApi(configuration);
        const instrumentApi: Streams.InstrumentsApi = new Streams.InstrumentsApi(configuration);
        const variableApi: Streams.VariablesApi = new Streams.VariablesApi(configuration);
        const measurmentApi: Streams.MeasurementsApi = new Streams.MeasurementsApi(configuration);
        const ontologyApi: Streams.OntologiesApi = new Streams.OntologiesApi(configuration);
        const channelApi: Streams.ChannelsApi = new Streams.ChannelsApi(configuration);
        const templateApi: Streams.TemplatesApi = new Streams.TemplatesApi(configuration);
        const unitApi: Streams.UnitsApi = new Streams.UnitsApi(configuration);
        const measuredPropertyApi: Streams.MeasuredPropertiesApi = new Streams.MeasuredPropertiesApi(configuration);


        //projects
        const listProjectParams: Streams.ListProjectsRequest = {};

        const projectResponse: Streams.RespListProjects = await projectApi.listProjects(listProjectParams);
        const projects: Array<Streams.Project> = projectResponse.result;
        console.log(projects);

        //sites
        const projectId: string = projects[0].project_name;
        const listSiteParams: Streams.ListSitesRequest = {
            projectUuid: projectId,
        };

        const siteResponse: Streams.RespListSites = await siteApi.listSites(listSiteParams);
        const sites: Array<Streams.Site> = siteResponse.result;
        console.log(sites);

        //instruments
        const siteId: string= sites[0].site_id;
        const listInstrumentParams: Streams.ListInstrumentsRequest = {
            projectUuid: projectId,
            siteId: siteId,
        };

        const instrumentResponse: Streams.RespListInstruments = await instrumentApi.listInstruments(listInstrumentParams);
        const instruments: Array<Streams.Instrument> = instrumentResponse.result;
        console.log(instruments);

        //variables
        const instId: string = instruments[0].inst_id;
        const listVariableParams: Streams.ListVariablesRequest = {
            projectUuid: projectId,
            siteId: siteId,
            instId: instId,
        };

        const variableResponse: Streams.RespListVariables = await variableApi.listVariables(listVariableParams);
        const variables: Array<Streams.Variable> = variableResponse.result;
        console.log(variables);

        //measurements
        //list
        let listMeasurementParams: Streams.ListMeasurementsRequest = {
            projectUuid: projectId,
            siteId: siteId,
            instId: instId,
        };

        const measurementResponse: Streams.RespListMeasurements = await measurmentApi.listMeasurements(listMeasurementParams);
        const measurements: Array<Streams.Measurement> = measurementResponse.result;
        console.log(measurements);

        //download
        let downloadMeasurementParams: Streams.DownloadMeasurementsRequest = {
            instId: instId,
        };

        const measurementDownloadResponse: Streams.RespDownloadMeasurements = await measurmentApi.downloadMeasurements(downloadMeasurementParams);
        const measurementsDownload: Array<Streams.Measurement> = measurementDownloadResponse.result;
        console.log(measurementsDownload);
    }
    catch(error) {
        checkJsonError(error);
    }
  }());




