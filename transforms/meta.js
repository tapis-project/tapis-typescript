const utils = require('./utils');

console.log("Jobs API transform");
try {
  const doc = utils.read('meta');
  let transformed = utils.prependPaths(doc, '/v3');
  // Remove /v3 from end of servers
  transformed.servers.forEach(
    server => {
      if (server.url.endsWith('v3')) {
        server.url = server.url.substring(0, server.url.length - 'v3'.length);
      }
    }
  )

  utils.write(transformed, 'meta');
} catch (e) {
  console.error(e);
}