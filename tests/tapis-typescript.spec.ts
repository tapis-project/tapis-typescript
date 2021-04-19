import 'mocha';
import { Actors } from '../src';
import { expect } from 'chai';

describe('tapis-typescript', () => { 
  it('should have Actors service', () => {
    expect(Actors).to.have.property('ActorsApi');
  });
});