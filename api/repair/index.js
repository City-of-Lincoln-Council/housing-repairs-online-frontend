const {saveRepairGateway, Sentry} = require('../gateways');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  let status;
  let result;

  try {
    result = await saveRepairGateway(req.body);
    status = 200;
  } catch (e) {
    Sentry.captureException(e);
    await Sentry.flush(2000);

    status = 400;
    result = 'Error searching';
  }

  context.res = {
    status: status,
    body: result
  };
};
