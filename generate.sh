if [ -z $1 ]
then
  echo "Missing parameter: service to be generated"
  exit 1
fi
node ./transforms/$1
rm -rf gen/$1
openapi-generator-cli generate --input-spec ./transformed_openapi/$1.yml --generator-name typescript-fetch --output gen/$1 --config ./configs/$1.json && cd gen/$1 && npm install
