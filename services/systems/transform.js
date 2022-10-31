const utils = require('../../utils');

console.log("Systems API transform");
try {
    // Copy systems spec  without transforms
    utils.copy('systems');
} catch (error) {
    console.error(error);
}