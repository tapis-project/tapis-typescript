const utils = require('../../utils');

console.log("Tenants API transform");
try {
  const doc = utils.read('tenants');
  // Remove extra tags (such as LDAP) from the /v3/tenants endpoints
  let transformed = utils.setTag(doc, '/v3/tenants', 'Tenants');

  transformed = utils.expandBasicResponses(transformed);
  
  // Rename schemas
  const schemas = {
    NewLDAP: 'ReqCreateLdap',
    NewTenant: 'ReqCreateTenant',
    NewSite: 'ReqCreateSite'
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )


  utils.write(transformed, 'tenants');
} catch (e) {
  console.error(e);
}