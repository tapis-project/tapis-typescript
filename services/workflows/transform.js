const utils = require('../../utils');

console.log("Workflows API transform");
try {
    // Copy systems spec  without transforms
    utils.copy('workflows');
} catch (error) {
    console.error(error);
}