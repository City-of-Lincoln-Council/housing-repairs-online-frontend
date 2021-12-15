import dummyAppointments from '../../fixtures/availableAppointments.json';

function intercept_address_search(
  numberOfResults = 1,
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
  });
}

function intercept_availability_search() {
  const api_url = 'http://localhost:3000/api';

  cy.intercept('GET', `${api_url}/availability*`, {
    statusCode: 201,
    body: dummyAppointments
  }).as('availability');
}

export {
  intercept_address_search,
  intercept_availability_search
}
