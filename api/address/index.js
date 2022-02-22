const {searchPropertiesGateway, Sentry} = require('../gateways');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  let status;
  let results;

  try {
    results = await searchPropertiesGateway(req.query.postcode);
  } catch (e) {
    Sentry.captureException(e);
    await Sentry.flush(2000);

    status = 500;
  }

  context.res = {
    status: status,
    body: results,
  };
};
