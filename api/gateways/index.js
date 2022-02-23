require('dotenv').config()

const axios = require('axios');

const sentryParams = {
  dsn: process.env.SENTRY_DSN,
  environment: process.env.API_ENV || 'development',
  dryRun: true
};

const testParams = () => {
  var env = process.env.AZURE_FUNCTIONS_ENVIRONMENT
  var url = process.env.REPAIRS_API
  var next_env = process.env.NEXT_PUBLIC_APP_ENV

  return {
    environment: '----'+ env,
    dryRun: process.env.API_ENV ? false : true,
    test: 123,
    url: '----'+ url,
    next_env: '----'+ next_env
  }
}

const apiRequester = require('./apiRequester')(axios);

const requestorTestParamsx = apiRequester.requestorTestParams;

const searchPropertiesGateway = require('./SearchPropertiesGateway')(apiRequester.makeGetRequest);
const availableAppointmentsGateway = require('./AvailableAppointmentsGateway')(apiRequester.makeGetRequest);
const saveRepairGateway = require('./SaveRepairGateway')(apiRequester.makePostRequest);

module.exports = {
  searchPropertiesGateway,
  availableAppointmentsGateway,
  saveRepairGateway,
  sentryParams, testParams, requestorTestParamsx
};
