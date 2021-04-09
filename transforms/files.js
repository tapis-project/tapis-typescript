const utils = require('./utils');

console.log("Files API transform");
try {
    // Copy systems spec  without transforms
    utils.copy('files');
} catch (error) {
    console.error(error);
}