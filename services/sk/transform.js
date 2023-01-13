const utils = require('../../utils');

console.log("SK API transform");
try {
    // Copy systems spec  without transforms
    utils.copy('sk');
} catch (error) {
    console.error(error);
}