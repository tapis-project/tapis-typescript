if [ -z $1 ]
then
  echo "Missing parameter: service to be generated"
  exit 1
fi
node ./services/$1/transform.js
rm -rf gen/$1
# openapi-generator-cli generate --input-spec ./transformed_openapi/$1.yml --generator-name typescript-fetch --output gen/$1 --config ./configs/$1.json && cd gen/$1 && npm install && npm run build

# Testing workflows generation with --skip-validate-spec flag
openapi-generator-cli generate --skip-validate-spec --input-spec ./services/$1/transformed_spec.yml --generator-name typescript-fetch --output gen/$1 --config ./services/$1/config.json \ 
&& cd gen/$1 \ 
&& npm install \
&& npm run build
