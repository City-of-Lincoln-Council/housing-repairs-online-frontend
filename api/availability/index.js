const {availableAppointmentsGateway} = require('../gateways');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  const results = await availableAppointmentsGateway({
    repairLocation: req.query.repairLocation,
    repairProblem: req.query.repairProblem,
    repairIssue: req.query.repairIssue,
    locationId: req.query.locationId,
    fromDate: req.query.fromDate
  });

  context.res = {
    body: results
  };
};
