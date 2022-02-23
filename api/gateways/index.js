require('dotenv').config()

const axios = require('axios');

const sentryParams = {
  dsn: process.env.SENTRY_DSN,
  environment: process.env.API_ENV || 'development',
  dryRun: process.env.API_ENV ? false : true
};

const env = '----'+ process.env.API_ENV
const url = '----'+ process.env.REPAIRS_API
const next_env = '----'+ process.env.NEXT_PUBLIC_APP_ENV

const testParams = {
  environment: env,
  dryRun: process.env.API_ENV ? false : true,
  test: 123,
  url: url,
  next_env: next_env
}

const apiRequester = require('./apiRequester')(axios);

const searchPropertiesGateway = require('./SearchPropertiesGateway')(apiRequester.makeGetRequest);
const availableAppointmentsGateway = require('./AvailableAppointmentsGateway')(apiRequester.makeGetRequest);
const saveRepairGateway = require('./SaveRepairGateway')(apiRequester.makePostRequest);

module.exports = {
  searchPropertiesGateway,
  availableAppointmentsGateway,
  saveRepairGateway,
  sentryParams, testParams
};
