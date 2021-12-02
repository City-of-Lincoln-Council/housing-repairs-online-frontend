const AvailableAppointmentsGateway = require('../gateways/AvailableAppointmentsGateway');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  const results = await AvailableAppointmentsGateway({
    repairLocation: req.query.repairLocation,
    repairProblem: req.query.repairProblem,
    repairIssue: req.query.repairIssue,
    uprn: req.query.uprn
  });

  context.log({
    repairLocation: req.query.repairLocation,
    repairProblem: req.query.repairProblem,
    repairIssue: req.query.repairIssue,
    uprn: req.query.uprn
  });

  context.res = {
    body: results
  };
};
