const {makeGetRequest} = require('./helpers');

module.exports = async postcode => {
  var result;
  result = await makeGetRequest({
    url: `/addresses?postcode=${postcode}`
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
