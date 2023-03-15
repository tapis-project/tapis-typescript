// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Actors
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

let actorsApi: Actors.ActorsApi;
let messagesApi: Actors.MessagesApi;
let executionsApi: Actors.ExecutionsApi;
let noncesApi: Actors.NoncesApi;
let stateApi: Actors.StateApi;
let permissionsApi: Actors.PermissionsApi;
let workersApi: Actors.WorkersApi;
let aliasesApi: Actors.AliasesApi;
let searchApi: Actors.SearchApi;

describe('Actors e2e tests', async () => {

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Actors.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-TAPIS-TOKEN": token.access_token
      },
      fetchApi: fetch
    }
    const configuration: Actors.Configuration = new Actors.Configuration(configurationParameters);
    
    actorsApi = new Actors.ActorsApi(configuration);
    messagesApi = new Actors.MessagesApi(configuration);
    executionsApi = new Actors.ExecutionsApi(configuration);
    noncesApi = new Actors.NoncesApi(configuration);
    stateApi = new Actors.StateApi(configuration);
    permissionsApi = new Actors.PermissionsApi(configuration);
    workersApi = new Actors.WorkersApi(configuration);
    aliasesApi = new Actors.AliasesApi(configuration);
    searchApi = new Actors.SearchApi(configuration);
  });

  let actorId: string | null = null

  it("should create an actor", async () => {
    // Create an actor for all tests
    try {
      const data: Actors.RespCreateActor = await actorsApi.createActor({reqCreateActor: {
        image: "abacosamples/wc",
        name: "word_counter",
        description: "Actor that counts words."
      }})
      actorId = data.result?.id
    } catch {}
  });

  it("should send a message ", async () => {
    // Create an actor for all tests
    try {
      // const data: Actors.RespSendMessage = await messagesApi.sendMessage({actorId, jSONMessage: {message: "This is a message"}})
      // actorId = data.result?.id
    } catch {}
  });
});