// Load e2e environment variables into process.env
require('dotenv').config({ path: 'example.env' });
const fetch = require('node-fetch');

import { 
  Authenticator,
  Systems
} from '@tapis/tapis-typescript';

// A utility function that creates an access_token object, that contains a JWT
const getToken = async (): Promise<Authenticator.NewAccessTokenResponse> => {
  // Configure the client
  const configurationParameters: Authenticator.ConfigurationParameters = {
    basePath: process.env.TEST_TENANT,
    fetchApi: fetch
  }
  const configuration: Authenticator.Configuration = new Authenticator.Configuration(configurationParameters);
  const api: Authenticator.TokensApi = new Authenticator.TokensApi(configuration);
  
  // Create a request object with the required parameters
  const createTokenRequest: Authenticator.CreateTokenRequest = {
    reqCreateToken: {
      username: process.env.TEST_USER,
      password: process.env.TEST_PASSWORD,
      grant_type: "password"
    }
  }

  // Retrieve the token
  const response: Authenticator.RespCreateToken = await api.createToken(createTokenRequest);

  // Return the access_token structure, which contains an 'access_token' field with the JWT
  return response.result.access_token;
}

(async function() {
  // Retrieve an access token
  const token = await getToken();

  // Configure the client to use the retrieved JWT as the "X-Tapis-Token" authentication header
  const configurationParameters: Systems.ConfigurationParameters = {
    basePath: process.env.TEST_TENANT,
    headers: {
      "X-Tapis-Token": token.access_token
    },
    fetchApi: fetch
  }
  const configuration: Systems.Configuration = new Systems.Configuration(configurationParameters);
  const api = new Systems.SystemsApi(configuration);

  // Create a request object
  const systemsRequest: Systems.GetSystemsRequest = {};

  // Send the request
  const systemsResponse: Systems.RespSystems = await api.getSystems(systemsRequest);

  // Print the result
  const systems: Array<Systems.TapisSystem> = systemsResponse.result;
  console.log(systems);
}());

export default getToken;