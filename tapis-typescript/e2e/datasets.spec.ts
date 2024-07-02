// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Datasets
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

let datasetsApi: Datasets.DatasetsApi;

describe('Datasets e2e tests', async () => {

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Datasets.ConfigurationParameters = {
    //   basePath: process.env.TEST_TENANT,
      basePath: 'https://hub.pods.tacc.tapis.io',
      headers: {
        "X-TAPIS-TOKEN": token.access_token!
      },
      fetchApi: fetch
    }
    const configuration: Datasets.Configuration = new Datasets.Configuration(configurationParameters);
    
    datasetsApi = new Datasets.DatasetsApi(configuration);
  });

  it("should fetch information on the top 100 most downloaded datasets", async () => {
    try{
        const DatasetsResponseObject: Datasets.RespDatasetsObject = await datasetsApi.listDatasets();
        expect(DatasetsResponseObject.result.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch information for a specific dataset", async () => {
    try{
        const reqDataset: Datasets.GetDatasetRequest = { datasetId: 'hails/mmlu_no_train'};
        const DatasetResponse: Datasets.RespDataset = await datasetsApi.getDataset(reqDataset);
        expect(DatasetResponse.result.dataset_id).to.equal('hails/mmlu_no_train');
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch datasets based on query", async () => {
    try{
        const userQuery: Datasets.ListDatasetsByQueryRequest = { query: 'iris'};
        const DatasetsResponseObject: Datasets.RespDatasetsObject = await datasetsApi.listDatasetsByQuery(userQuery);
        expect(DatasetsResponseObject.result.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch datasets by author", async () => {
    try{
        const author: Datasets.ListDatasetsByAuthorRequest = { authorId: 'facebook'};
        const DatasetsResponseObject: Datasets.RespDatasetsObject = await datasetsApi.listDatasetsByAuthor(author);
        expect(DatasetsResponseObject.result.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch datasets by language", async () => {
    try{
        const language: Datasets.ListDatasetsByLanguageRequest = { languageName: 'en'};
        const DatasetsResponseObject: Datasets.RespDatasetsObject = await datasetsApi.listDatasetsByLanguage(language);
        expect(DatasetsResponseObject.result.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch datasets by task", async () => {
    try{
        const task: Datasets.ListDatasetsByTaskRequest = { taskType: 'summarization'};
        const DatasetsResponseObject: Datasets.RespDatasetsObject = await datasetsApi.listDatasetsByTask(task);
        expect(DatasetsResponseObject.result.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch datasets by size category", async () => {
    try{
        const library: Datasets.ListDatasetsBySizeCategoryRequest = { sizeCategory: '100K<n<1M'};
        const DatasetsResponseObject: Datasets.RespDatasetsObject = await datasetsApi.listDatasetsBySizeCategory(library);
        expect(DatasetsResponseObject.result.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch download links for requested dataset", async () => {
    try{
        const reqDataset: Datasets.DownloadDatasetRequest = { datasetId: 'google/jigsaw_unintended_bias'};
        const downloadDatasetResponse: Datasets.RespDatasetDownload = await datasetsApi.downloadDataset(reqDataset);
        expect(downloadDatasetResponse.result.dataset_id).to.equal('google/jigsaw_unintended_bias');
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch dataset card information for requested dataset", async () => {
    try{
        const reqDataset: Datasets.GetDatasetCardRequest = { datasetId: 'google/jigsaw_unintended_bias'};
        const datasetCardResponse: Datasets.RespDatasetCard = await datasetsApi.getDatasetCard(reqDataset);
        expect(datasetCardResponse.result.dataset_card.length).to.be.greaterThanOrEqual(0);
    } catch (error) {
        checkJsonError(error)
    } 

  });

});