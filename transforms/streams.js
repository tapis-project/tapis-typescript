const utils = require('./utils');

console.log("Streams API transform");
try {
  const doc = utils.read('streams');

  let transformed = utils.setTag(doc, '/v3/streams/hello', 'Health');
  transformed = utils.setTag(transformed, '/v3/streams/ready', 'Health');
  transformed = utils.setTag(transformed, '/v3/streams/healthcheck', 'Health');
  transformed = utils.expandBasicResponses(transformed);
  
  // Rename schemas
  const schemas = {
    NewProject: 'ReqCreateProject',
    NewInstrument: 'ReqCreateInstrument',
    NewSite: 'ReqCreateSite',
    NewVariable: 'ReqCreateVariable',
    NewMeasurement: 'ReqCreateMeasurement',
    NewOntology: 'ReqAddOntology',
    NewChannel: 'ReqCreateChannel',
    NewTemplate: 'ReqCreateTemplate'
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )

  utils.write(transformed, 'streams');
} catch (e) {
  console.error(e);
}