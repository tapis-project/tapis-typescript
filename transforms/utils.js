const fs = require('fs');
const yaml = require('js-yaml');
/**
 * Alter any methods of any paths matching a pattern to have only one tag
 * @param   {string}    doc     the yml object
 * @param   {string}    pattern a search string for paths
 * @param   {string}    tag     the tag to set for each method in matching paths
 * @return  {any}               a new object representation of yml
 */
const setTag = (doc, pattern, tag) => {
    const result = { ...doc }
    Object.keys(result.paths).filter(path => path.startsWith(pattern)).forEach(
        path => {
            const pathObj = result.paths[path];
            Object.keys(pathObj).forEach(
                method => {
                    pathObj[method].tags = [ tag ]
                }
            )
        }
    )
    return result;
}

/**
 * Copy a service's yml file directly to the transformed_openapi directory
 * if no transformations are required 
 * @param   {string}    service service name
 */
const copy = (service) => {
    fs.copyFileSync(`./tapis_openapi/${service}.yml`, `./transformed_openapi/${service}.yml`);
}

/**
 * Load a service's yml file and return it as a 
 * @param   {string}    service service name
 * @return  {any}               object representation of yml
 */
const read = (service) => {
    return yaml.load(fs.readFileSync(`./tapis_openapi/${service}.yml`, 'utf8'));
}

const write = (doc, service) => {
    fs.writeFileSync(`./transformed_openapi/${service}.yml`, yaml.dump(doc));
}

module.exports.setTag = setTag;
module.exports.copy = copy;
module.exports.read = read;
module.exports.write = write;