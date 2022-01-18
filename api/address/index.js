const {searchPropertiesGateway} = require('../gateways');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  const results = await searchPropertiesGateway(req.query.postcode);

  context.log(results);

  context.res = {
    body: results
  };
};
