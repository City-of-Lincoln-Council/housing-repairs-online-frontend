const axios = require('axios');

const apiRequester = require('./apiRequester')(axios);

const searchPropertiesGateway = require('./SearchPropertiesGateway')(apiRequester.makeGetRequest);
const availableAppointmentsGateway = require('./AvailableAppointmentsGateway')(apiRequester.makeGetRequest);
const saveRepairGateway = require('./SaveRepairGateway')(apiRequester.makePostRequest);

module.exports = {
  searchPropertiesGateway,
  availableAppointmentsGateway,
  saveRepairGateway
};
