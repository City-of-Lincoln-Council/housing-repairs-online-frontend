
module.exports = makeGetRequest => {
  return async postcode => {
    var result;
    result = await makeGetRequest({
      uri: `/addresses?postcode=${postcode}`
    }).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    })

    return result;
  }};
