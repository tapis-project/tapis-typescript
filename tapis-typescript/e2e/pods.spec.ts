// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { before } from 'mocha';
import { 
  Pods
} from '../src';
import { getToken, checkJsonError } from './utils';
import { expect } from 'chai';
import fetch from 'cross-fetch';

describe('Pods e2e tests', async () => {
  let configuration: Pods.Configuration;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Pods.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token
      },
      fetchApi: fetch
    }
    configuration = new Pods.Configuration(configurationParameters);
  });

  it('should list pods', async () => {
    try {
      const api: Pods.PodsApi = new Pods.PodsApi(configuration);
      const response: Pods.PodsResponse = await api.listPods();
      const pods: Array<Pods.PodResponseModel> = response.result;
      expect(pods.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
      checkJsonError(error)
    }
  });

  it('should list volumes', async () => {
    try {
      const api: Pods.VolumesApi = new Pods.VolumesApi(configuration);
      const response: Pods.VolumesResponse = await api.listVolumes();
      const volumes: Array<Pods.VolumeResponseModel> = response.result;
      expect(volumes.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
      checkJsonError(error)
    }
  });

  it('should list snapshots', async () => {
    try {
      const api: Pods.SnapshotsApi = new Pods.SnapshotsApi(configuration);
      const response: Pods.SnapshotsResponse = await api.listSnapshots();
      const snapshots: Array<Pods.SnapshotResponseModel> = response.result;
      expect(snapshots.length).to.be.greaterThanOrEqual(0)
    } catch (error) {
      checkJsonError(error)
    }
  });


});