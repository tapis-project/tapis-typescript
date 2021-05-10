// Load e2e environment variables into process.env
require('dotenv').config({ path: 'e2e.env' });

import 'mocha';
import { expect } from 'chai';
import { it } from 'mocha';
import getToken from './utils';

describe('Authenticator e2e tests', () => {
  it('should retrieve a JWT token', async () => {
    try {
      const token = await getToken();
      expect(token.access_token.length).to.be.greaterThan(0);  
    } catch (error) {
      throw await error.json()
    }
  });
});