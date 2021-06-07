// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Files
} from '../src';
import getToken from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Files e2e tests', async () => {
  let configuration: Files.Configuration;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Files.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token
      },
      fetchApi: fetch
    }
    configuration = new Files.Configuration(configurationParameters);
  });

  it('should retrieve a file listing on the test system', async () => {
    try {
      const api: Files.FileOperationsApi = new Files.FileOperationsApi(configuration);
      const listFilesRequest: Files.ListFilesRequest = {
        systemId: process.env.TEST_SYSTEM_ID,
        path: '/'
      };
      const response: Files.FileListingResponse = await api.listFiles(listFilesRequest);
      const files: Array<Files.FileInfo> = response.result;
      expect(files.length).to.be.greaterThanOrEqual(1)
    } catch (error) {
      // Catch any errors thrown by API calls
      // Asynchronously wait for the error to be translated
      const errorBody = await error.json();
      console.error(errorBody);
      // Rethrow the error
      throw errorBody;
    }

  });
});