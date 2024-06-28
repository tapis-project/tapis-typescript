const utils = require('../../utils');

console.log("Datasets API transform");
try {
    // Copy workflows spec  without transforms
    utils.copy('datasets');
} catch (error) {
    console.error(error);
}