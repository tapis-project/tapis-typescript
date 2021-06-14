// Load e2e environment variables into process.env
require('dotenv').config({ path: 'example.env' });
import getToken from '../../tapis-typescript/e2e/utils';
const fetch = require('node-fetch');

import { 
  Files
} from '@tapis/tapis-typescript';

(async function() {
  // Retrieve an access token
  const token = await getToken();

  // Configure the client to use the retrieved JWT as the "X-Tapis-Token" authentication header
  const configurationParameters: Files.ConfigurationParameters = {
    basePath: process.env.TEST_TENANT,
    headers: {
      "X-Tapis-Token": token.access_token
    },
    fetchApi: fetch
  }
  const configuration: Files.Configuration = new Files.Configuration(configurationParameters);

  try {
    const api: Files.FileOperationsApi = new Files.FileOperationsApi(configuration);
    const listFilesRequest: Files.ListFilesRequest = {
      systemId: process.env.TEST_SYSTEM_ID,
      path: '/'
    };
    const response: Files.FileListingResponse = await api.listFiles(listFilesRequest);
    const files: Array<Files.FileInfo> = response.result;
    console.log(files);
  } catch (error) {
    // Catch any errors thrown by API calls
    // Asynchronously wait for the error to be translated
    const errorBody = await error.json();
    console.error(errorBody);
    // Rethrow the error
    throw errorBody;
  }
}());

export default getToken;