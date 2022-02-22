
module.exports = makePostRequest => {
  return async body => {
    let result;

    result = await makePostRequest({
      uri: '/repair',
      body
    }).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    })

    return result;
  }
};
