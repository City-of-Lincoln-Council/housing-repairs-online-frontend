
module.exports = (makePostRequest, sentry) => {
  return async body => {
    let result;

    result = await makePostRequest({
      uri: '/repair',
      body
    }).then(response => {
      return response.data;
    }).catch(async error => {
      sentry.captureException(error);
      await sentry.flush(2000);
      if (error.status >= 400) {
        return new Error('Error saving');
      }
    })

    return result;
  }
};
