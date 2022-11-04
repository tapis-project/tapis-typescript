import 'mocha';
import { 
  Authenticator, 
  Systems, 
  Tenants,
  Files,
  Apps,
  Jobs,
  Streams,
  Workflows
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
  it('should have Apps service', () => {
    expect(Apps).to.have.property('ApplicationsApi');
    expect(Apps).to.have.property('HealthApi');
    expect(Apps).to.have.property('PermissionsApi');
  });
  it('should have Jobs service', () => {
    expect(Jobs).to.have.property('JobsApi');
    expect(Jobs).to.have.property('HealthApi');
  });
  it('should have Streams service', () => {
    expect(Streams).to.have.property('HealthApi');
    expect(Streams).to.have.property('ProjectsApi');
    expect(Streams).to.have.property('SitesApi');
    expect(Streams).to.have.property('InstrumentsApi');
    expect(Streams).to.have.property('VariablesApi');
    expect(Streams).to.have.property('MeasurementsApi');
    expect(Streams).to.have.property('OntologiesApi');
    expect(Streams).to.have.property('ChannelsApi');
    expect(Streams).to.have.property('TemplatesApi');
    expect(Streams).to.have.property('UnitsApi');
    expect(Streams).to.have.property('MeasuredPropertiesApi');
  });
  it('should have Workflows service', () => {
    expect(Workflows).to.have.property('ArchivesApi');
    expect(Workflows).to.have.property('CICDApi');
    expect(Workflows).to.have.property('EventsApi');
    expect(Workflows).to.have.property('GeneralApi');
    expect(Workflows).to.have.property('GroupsApi');
    expect(Workflows).to.have.property('IdentitiesApi');
    expect(Workflows).to.have.property('PipelineArchivesApi');
    expect(Workflows).to.have.property('PipelineRunsApi');
    expect(Workflows).to.have.property('PipelinesApi');
    expect(Workflows).to.have.property('TaskExecutionsApi');
    expect(Workflows).to.have.property('TasksApi');
    expect(Workflows).to.have.property('UsersApi');
  });
});