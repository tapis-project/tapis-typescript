import 'mocha';
import { 
  Authenticator, 
  Systems, 
  Tenants,
  Files
} from '../src';
import { expect } from 'chai';

describe('tapis-typescript', () => { 
  it('should have Authenticator service', () => {
    expect(Authenticator).to.have.property('ClientsApi');
    expect(Authenticator).to.have.property('ProfilesApi');
    expect(Authenticator).to.have.property('TokensApi');
  })
  it('should have Systems service', () => {
    expect(Systems).to.have.property('CredentialsApi');
    expect(Systems).to.have.property('GeneralApi');
    expect(Systems).to.have.property('PermissionsApi');
    expect(Systems).to.have.property('SystemsApi');
  });
  it('should have Tenants service', () => {
    expect(Tenants).to.have.property('SitesApi');
    expect(Tenants).to.have.property('TenantsApi');
  });
  it('should have Files service', () => {
    expect(Files).to.have.property('ContentApi');
    expect(Files).to.have.property('FileOperationsApi');
    expect(Files).to.have.property('HealthApi');
    expect(Files).to.have.property('PermissionsApi');
    expect(Files).to.have.property('ShareApi');
    expect(Files).to.have.property('TransfersApi');
  });
});