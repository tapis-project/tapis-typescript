const utils = require('./utils');

console.log("Authenticator API transform");
try {
  const doc = utils.read('authenticator');
  let transformed = { ...doc };

  transformed = utils.expandBasicResponses(transformed);

  // Rename schemas
  const schemas = {
    NewClient: 'ReqCreateClient',
    NewToken: 'ReqCreateToken'
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )

  utils.write(transformed, 'authenticator');
} catch (e) {
  console.error(e);
}