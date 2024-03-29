const utils = require('../../utils');

console.log("Actors API transform");
try {
  const doc = utils.read('actors');
  let transformed = utils.setTag(
    doc, '/v3/actors/{actor_id}/executions/{execution_id}/results', 'Executions'
  );

  transformed = utils.expandBasicResponses(transformed);

  // Rename schemas
  const schemas = {
    NewAlias: 'ReqCreateAlias',
    NewActor: 'ReqCreateActor',
    NewActorNonce: 'ReqCreateNonce'
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )

  utils.write(transformed, 'actors');
} catch (e) {
  console.error(e);
}