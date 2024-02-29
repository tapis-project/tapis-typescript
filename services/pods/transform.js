const utils = require('../../utils');

console.log("Pods API transform");
try {
    // prepend /v3 to paths as Pods generated spec doesn't have that
    // and it messes up tapis-ui. :(
    const doc = utils.read('pods');
    let transformed = utils.prependPaths(doc, '/v3');

    utils.write(transformed, 'pods');
} catch (error) {
    console.error(error);
}