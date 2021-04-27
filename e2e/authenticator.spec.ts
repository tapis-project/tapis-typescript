// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { expect } from 'chai';
import fetch from 'cross-fetch';
import { 
  Authenticator
} from '../src';
import { it } from 'mocha';

describe('Authenticator e2e tests', () => {
  it('should retrieve a JWT token', async () => {
    const configurationParameters: Authenticator.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      fetchApi: fetch
    }
    const configuration: Authenticator.Configuration = new Authenticator.Configuration(configurationParameters);
    const api: Authenticator.TokensApi = new Authenticator.TokensApi(configuration);
    const createTokenRequest: Authenticator.CreateTokenRequest = {
      reqCreateToken: {
        username: process.env.TEST_USER,
        password: process.env.TEST_PASSWORD,
        grant_type: "password"
      }
    }
    const response: Authenticator.RespCreateToken = await api.createToken(createTokenRequest);
    expect(response.result).to.have.property('access_token');
    expect(response.result.access_token).to.have.property('access_token');
  });
});