const {makeGetRequest} = require('./helpers');

module.exports = async ({repairLocation, repairProblem, repairIssue, uprn}) => {
  let result;

  result = await makeGetRequest({
    url: '/Appointments/AvailableAppointments',
    params: {
      repairLocation: repairLocation,
      repairProblem: repairProblem,
      repairIssue: repairIssue,
      uprn: uprn
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    console.error(error);
    if (error.status >= 400) {
      return new Error('Error searching');
    }
  })

  return result;
};
