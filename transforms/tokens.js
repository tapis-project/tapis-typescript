const utils = require('./utils');

console.log("Tokens API transform");
try {
  const doc = utils.read('tokens');
  // Remove extra tags (such as LDAP) from the /v3/tenants endpoints
  let transformed = { ...doc } 
  transformed = utils.expandBasicResponses(transformed);

  // Rename schemas
  const schemas = {
    NewTokenRequest: 'ReqCreateToken',
    NewTokenResponse: 'Token',
    RefreshTokenRequest: 'ReqRefreshToken'
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )

  utils.write(transformed, 'tokens');
} catch (e) {
  console.error(e);
}