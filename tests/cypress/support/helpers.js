import dummyAppointments from '../../fixtures/availableAppointments.json';

function intercept_address_search(
  numberOfResults = 2,
  postcode='SW1A 2AA',
  nullAddressLine1 = false,
  nullAddressLine2 = false
) {
  const api_url = 'http://localhost:3000/api';
  const response = [];

  for (let i = 0; i < numberOfResults; i++) {
    response.push({
      addressLine1: !nullAddressLine1 ? `${i+1} Downing Street` : undefined,
      addressLine2: !nullAddressLine2 ? 'London' : undefined,
      postCode: postcode
    });
  }
  cy.intercept('GET', `${api_url}/address?*`, {
    statusCode: 201,
    body: response
  }).as('address');
}

function intercept_availability_search() {
  const api_url = 'http://localhost:3000/api';

  cy.intercept('GET', `${api_url}/availability*`, {
    statusCode: 201,
    body: dummyAppointments
  }).as('availability');
}

function intercept_save_repair(repairId) {
  const api_url = 'http://localhost:3000/api';

  cy.intercept('POST', `${api_url}/repair`, {
    statusCode: 201,
    body: repairId
  }).as('saveRepair');
}

const navigateToPageSelectRadioOptionAndContinue = ({page, option}) => {
  cy.get(`[data-cy=${page}]`, {timeout: 10000}).then(() => {
    cy.contains(option).click();
    cy.get('button').click();
  });
}
const continueOnPage = (page) => {
  cy.get(`[data-cy=${page}]`, {timeout: 10000}).then(() => {
    cy.get('button').contains('Continue').click();
  });
}
const navigateToPageTypeInputTextAndContinue = ({page, inputText}) => {
  cy.get(`[data-cy=${page}]`, {timeout: 10000}).then(() => {
    cy.get('input.govuk-input').type(inputText);
    cy.get('button').click();
  });
}

const convertDateToDisplayDate = (date) => {
  let dateArray = date?.split(' ')
  dateArray?.splice(3, 0, 'between')
  return(dateArray?.join(' '))
}

const navigateToLocation = () => {
  intercept_address_search();
  cy.visit('http://localhost:3000/report-repair/');

  navigateToPageSelectRadioOptionAndContinue({
    page: 'priority-list',
    option:'No, I want to request a non-emergency repair'
  })

  navigateToPageSelectRadioOptionAndContinue({
    page: 'communal', option:'No'
  })

  navigateToPageTypeInputTextAndContinue({
    page: 'postcode', inputText:'SW1A 2AA'
  })

  cy.get('[data-cy=address]', {timeout: 10000}).then(() => {
    cy.get('select').select('1 Downing Street, London, SW1A 2AA')
    cy.get('button').click();
  });
}

export {
  intercept_address_search,
  intercept_availability_search,
  navigateToPageSelectRadioOptionAndContinue,
  navigateToPageTypeInputTextAndContinue,
  convertDateToDisplayDate,
  intercept_save_repair,
  continueOnPage,
  navigateToLocation
}
