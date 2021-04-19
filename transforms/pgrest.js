const utils = require('./utils');

console.log("PGRest API transform");
try {
  const doc = utils.read('pgrest');
  let transformed = { ...doc };

  // Rename schemas
  const schemas = {
    NewTable: 'ReqCreateTable',
    NewCollectionItem: 'ReqCreateInCollection',
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )

  // Remove type restriction on UpdateMultipleCollectionItem
  // due to incompatibility with generator
  delete transformed
    .components
    .schemas
    .UpdateMultipleCollectionItem
    .properties
    .where
    .properties
    .sub_value
    .properties
    .value
    .oneOf;
    
  utils.write(transformed, 'pgrest');
} catch (e) {
  console.error(e);
}