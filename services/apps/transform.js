const utils = require('../../utils');

console.log("Apps API transform");
try {
  const doc = utils.read('apps');
  // Remove extra tags (such as LDAP) from the /v3/tenants endpoints
  let transformed = utils.setTag(doc, '/v3/apps/healthcheck', 'Health');
  transformed = utils.setTag(transformed, '/v3/apps/readycheck', 'Health');

  utils.write(transformed, 'apps');
} catch (e) {
  console.error(e);
}