// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Models
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

let modelsApi: Models.ModelsApi;

describe('Models e2e tests', async () => {

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Models.ConfigurationParameters = {
    //   basePath: process.env.TEST_TENANT,
      basePath: 'https://hub.pods.tacc.tapis.io',
      headers: {
        "X-TAPIS-TOKEN": token.access_token!
      },
      fetchApi: fetch
    }
    const configuration: Models.Configuration = new Models.Configuration(configurationParameters);
    
    modelsApi = new Models.ModelsApi(configuration);
  });

  it("should fetch information on the top 100 most downloaded models", async () => {
    try{
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModels();
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch information for a specific model", async () => {
    try{
        const reqModel: Models.GetModelRequest = { modelId: 'google/flan-t5-large'};
        const modelResponse: Models.RespModelServer = await modelsApi.getModel(reqModel);
        expect(modelResponse.result.model_id).to.equal('google/flan-t5-large');
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch models based on query", async () => {
    try{
        const userQuery: Models.ListModelsByQueryRequest = { query: 'bert'};
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModelsByQuery(userQuery);
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch models by author", async () => {
    try{
        const author: Models.ListModelsByAuthorRequest = { authorId: 'facebook'};
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModelsByAuthor(author);
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch models by dataset", async () => {
    try{
        const datasetName: Models.ListModelsByDatasetRequest = { dataset: 'scikit-learn/iris'};
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModelsByDataset(datasetName);
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch models by language", async () => {
    try{
        const language: Models.ListModelsByLanguageRequest = { languageName: 'en'};
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModelsByLanguage(language);
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch models by library", async () => {
    try{
        const library: Models.ListModelsByLibraryRequest = { libraryName: 'PyTorch'};
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModelsByLibrary(library);
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch models by task", async () => {
    try{
        const task: Models.ListModelsByTaskRequest = { taskType: 'summarization'};
        const modelsResponseObject: Models.RespModelObject = await modelsApi.listModelsByTask(task);
        expect(modelsResponseObject.result.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch inference server info for requested model", async () => {
    try{
        const reqModel: Models.GetModelInferenceServerRequest = { modelId: 'google/flan-t5-large'};
        const inferenceServerResponse: Models.RespModelServer = await modelsApi.getModelInferenceServer(reqModel);
        expect(inferenceServerResponse.result.model_id).to.equal('google/flan-t5-large');
    } catch (error) {
        checkJsonError(error)
    } 

  });

  it("should fetch download links for requested model", async () => {
    try{
        const reqModel: Models.DownloadModelRequest = { modelId: 'google/flan-t5-large'};
        const downloadModelResponse: Models.RespModelServer = await modelsApi.downloadModel(reqModel);
        expect(downloadModelResponse.result.model_id).to.equal('google/flan-t5-large');
    } catch (error) {
        checkJsonError(error)
    } 

  });

});