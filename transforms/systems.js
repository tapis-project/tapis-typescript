const fs = require('fs');

console.log("Systems API transform");
fs.copyFileSync('./tapis_openapi/systems.yml', './transformed_openapi/systems.yml');