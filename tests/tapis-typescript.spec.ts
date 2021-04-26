import 'mocha';
import { 
  Actors, Apps, Authenticator, 
  Files, Jobs, Meta, PGRest, 
  SK, Streams, Systems, Tenants, Tokens
} from '../src';
import { expect } from 'chai';

describe('tapis-typescript', () => { 
  it('should have Actors service', () => {
    expect(Actors).to.have.property('ActorsApi');
    expect(Actors).to.have.property('AliasesApi');
    expect(Actors).to.have.property('ExecutionsApi');
    expect(Actors).to.have.property('MessagesApi');
    expect(Actors).to.have.property('NoncesApi');
    expect(Actors).to.have.property('PermissionsApi');
    expect(Actors).to.have.property('SearchApi');
    expect(Actors).to.have.property('StateApi');
    expect(Actors).to.have.property('WorkersApi');
  });
  it('should have Apps service', () => {
    expect(Apps).to.have.property('ApplicationsApi');
    expect(Apps).to.have.property('HealthApi');
    expect(Apps).to.have.property('PermissionsApi');
  });
  it('should have Authenticator service', () => {
    expect(Authenticator).to.have.property('ClientsApi');
    expect(Authenticator).to.have.property('ProfilesApi');
    expect(Authenticator).to.have.property('TokensApi');
  });
  it('should have Files service', () => {
    expect(Files).to.have.property('ContentApi');
    expect(Files).to.have.property('FileOperationsApi');
    expect(Files).to.have.property('HealthApi');
    expect(Files).to.have.property('PermissionsApi');
    expect(Files).to.have.property('ShareApi');
    expect(Files).to.have.property('TransfersApi');
  });
  it('should have Jobs service', () => {
    expect(Jobs).to.have.property('JobsApi');
    expect(Jobs).to.have.property('HealthApi');
  });
  it('should have Meta service', () => {
    expect(Meta).to.have.property('AggregationApi');
    expect(Meta).to.have.property('CollectionApi');
    expect(Meta).to.have.property('DbApi');
    expect(Meta).to.have.property('DocumentApi');
    expect(Meta).to.have.property('GeneralApi');
    expect(Meta).to.have.property('RootApi');
  });
  it('should have PGRest service', () => {
    expect(PGRest).to.have.property('DataApi');
    expect(PGRest).to.have.property('ManageApi');
  });
  it('should have SK service', () => {
    expect(SK).to.have.property('GeneralApi');
    expect(SK).to.have.property('RoleApi');
    expect(SK).to.have.property('UserApi');
    expect(SK).to.have.property('VaultApi');
  });
  it('should have Streams service', () => {
    expect(Streams).to.have.property('ChannelsApi');
    expect(Streams).to.have.property('HealthApi');
    expect(Streams).to.have.property('InstrumentsApi');
    expect(Streams).to.have.property('MeasuredPropertiesApi');
    expect(Streams).to.have.property('MeasurementsApi');
    expect(Streams).to.have.property('OntologiesApi');
    expect(Streams).to.have.property('ProjectsApi');
    expect(Streams).to.have.property('SitesApi');
    expect(Streams).to.have.property('TemplatesApi');
    expect(Streams).to.have.property('UnitsApi');
    expect(Streams).to.have.property('VariablesApi');
  });
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
  it('should have Tokens service', () => {
    expect(Tokens).to.have.property('TokensApi');
  });
});