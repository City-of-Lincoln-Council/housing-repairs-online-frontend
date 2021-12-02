require('dotenv').config()
const axios = require('axios');
module.exports = async ({repairLocation, repairProblem, repairIssue, uprn}) => {
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
      return axiosInstance.get('/Appointments/AvailableAppointments', {
        params: {
          repairLocation: repairLocation,
          repairProblem: repairProblem,
          repairIssue: repairIssue,
          uprn: uprn
        }
      });
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
      if (error.status >= 400) {
        return new Error('Error searching');
      }
    })

  return result;
};
