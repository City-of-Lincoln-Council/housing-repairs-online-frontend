require('dotenv').config()
const axios = require('axios');

module.exports = async postcode => {
  var result;
  var identifier = process.env.REPAIRS_API_IDENTIFIER
  var baseUrl = process.env.REPAIRS_API;
  const axiosInstance = axios.create({
      baseURL: baseUrl
  })
  result = await axiosInstance.post(`/authentication?identifier=${identifier}`)
  .then(response => {
      var jwt = response.data;
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      return axiosInstance.get(`/addresses?postcode=${postcode}`);
  })
  .then(response => {
      console.log(response);
      return response.data;
  })
  .catch(error => {
      console.log(error);
      if (error.status >= 400) {
        return new Error('Error searching');
      }
  })

  return result;
};
