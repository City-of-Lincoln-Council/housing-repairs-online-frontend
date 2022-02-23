const Sentry = require('@sentry/node');

const {searchPropertiesGateway, sentryParams} = require('../gateways');

module.exports = async function (context, req) {
  Sentry.init(sentryParams);

  context.log('JavaScript HTTP trigger function processed a request.');

  let status;
  let results;

  try {
    results = await searchPropertiesGateway(req.query.postcode);
  } catch (e) {
    Sentry.captureException(e);
    await Sentry.flush(2000);

    status = 500;
    results = new Error('Error searching');
  }

  const thing1 = process.env.API_ENV
  const thing2 = process.env.NEXT_PUBLIC_APP_ENV
  const thing3 = process.env.NODE_ENV

  context.res = {
    status: status,
    body: {
      test: 1234,
      API_ENV: thing1,
      NEXT_PUBLIC_APP_ENV: thing2,
      NODE_ENV: thing3
    },
  };
};
