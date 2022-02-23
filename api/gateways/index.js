const axios = require('axios');

const sentryParams = {
  dsn: process.env.SENTRY_DSN,
  environment: process.env.API_ENV || 'development',
  dryRun: process.env.API_ENV ? true : false
};

const apiRequester = require('./apiRequester')(axios);

const searchPropertiesGateway = require('./SearchPropertiesGateway')(apiRequester.makeGetRequest);
const availableAppointmentsGateway = require('./AvailableAppointmentsGateway')(apiRequester.makeGetRequest);
const saveRepairGateway = require('./SaveRepairGateway')(apiRequester.makePostRequest);

module.exports = {
  searchPropertiesGateway,
  availableAppointmentsGateway,
  saveRepairGateway,
  sentryParams
};
