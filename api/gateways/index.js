const axios = require('axios');
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

const apiRequester = require('./apiRequester')(axios);

const searchPropertiesGateway = require('./SearchPropertiesGateway')(apiRequester.makeGetRequest, Sentry);
const availableAppointmentsGateway = require('./AvailableAppointmentsGateway')(apiRequester.makeGetRequest, Sentry);
const saveRepairGateway = require('./SaveRepairGateway')(apiRequester.makePostRequest, Sentry);

module.exports = {
  searchPropertiesGateway,
  availableAppointmentsGateway,
  saveRepairGateway
};
