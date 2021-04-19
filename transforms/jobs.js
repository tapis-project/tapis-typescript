const utils = require('./utils');

console.log("Jobs API transform");
try {
  const doc = utils.read('jobs');
  // Remove extra tags (such as LDAP) from the /v3/tenants endpoints
  let transformed = utils.setTag(doc, '/jobs/ready', 'Health');
  transformed = utils.setTag(transformed, '/jobs/hello', 'Health');
  transformed = utils.setTag(transformed, '/jobs/healthcheck', 'Health');
  transformed = utils.prependPaths(transformed, '/v3');
  // Remove /v3 from end of servers
  transformed.servers.forEach(
    server => {
      if (server.url.endsWith('v3')) {
        server.url = server.url.substring(0, server.url.length - 'v3'.length);
      }
    }
  )

  utils.write(transformed, 'jobs');
} catch (e) {
  console.error(e);
}