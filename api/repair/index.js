const {saveRepairGateway} = require('../gateways');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  const result = await saveRepairGateway(req.body);

  context.res = {
    status: result ? 200 : 500,
    body: result
  };
};
