const utils = require('../../utils');

console.log("Authenticator API transform");
try {
  const doc = utils.read('authenticator');
  let transformed = { ...doc };

  transformed.paths['/v3/oauth2/tokens'].post.responses['201'].content['application/json'].schema.properties.result['$ref'] =
    "#/components/schemas/NewTokenResponse";

  console.log({schemas: transformed.schemas});

  delete transformed.components.schemas.Token;
  transformed.components.schemas.NewTokenResponse = {
    "type": "object",
    "properties": {
      "access_token": {
        "$ref": "#/components/schemas/NewAccessTokenResponse"
      }
    }
  }

  transformed.components.schemas.NewAccessTokenResponse = {
    "type": "object",
    "properties": {
      "access_token": {
        "type": "string",
        "description": "The generated access token."
      },
      "expires_at": {
        "type": "string",
        "description": "The date-time string when the generated access token expires."
      },
      "expires_in": {
        "type": "integer",
        "description": "The time, in seconds, when the generated access token expires."
      }
    }
  }

  transformed = utils.expandBasicResponses(transformed);

  // Rename schemas
  const schemas = {
    NewClient: 'ReqCreateClient',
    NewToken: 'ReqCreateToken'
  }
  Object.keys(schemas).forEach(
    oldSchema => {
      const newSchema = schemas[oldSchema];
      transformed = utils.renameSchema(transformed, oldSchema, newSchema);
    }
  )


  utils.write(transformed, 'authenticator');
} catch (e) {
  console.error(e);
}