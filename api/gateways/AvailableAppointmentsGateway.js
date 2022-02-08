module.exports = (makeGetRequest, sentry) => {
  return async ({repairLocation, repairProblem, repairIssue, locationId, fromDate}) => {
    let result;

    result = await makeGetRequest({
      uri: '/Appointments/AvailableAppointments',
      params: {
        repairLocation: repairLocation,
        repairProblem: repairProblem,
        repairIssue: repairIssue,
        locationId: locationId,
        fromDate: fromDate
      }
    }).then(response => {
      return response.data;
    }).catch(async error => {
      sentry.captureException(error);
      await sentry.flush(2000);
      if (error.status >= 400) {
        return new Error('Error searching');
      }
    })

    return result;
  }
};
