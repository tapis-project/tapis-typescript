const utils = require('./utils');

console.log("Tenants API transform");
try {
  const doc = utils.read('tenants');
  // Remove extra tags (such as LDAP) from the /v3/tenants endpoints
  const transformed = utils.setTag(doc, '/v3/tenants', 'Tenants');
  utils.write(transformed, 'tenants');
} catch (e) {
  console.error(e);
}