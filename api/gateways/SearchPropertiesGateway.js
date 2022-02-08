
module.exports = (makeGetRequest, sentry) => {
  return async postcode => {
    var result;
    result = await makeGetRequest({
      uri: `/addresses?postcode=${postcode}`
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
  }};
