const utils = require('./utils');

console.log("Apps API transform");
try {
  const doc = utils.copy('apps');
} catch (e) {
  console.error(e);
}