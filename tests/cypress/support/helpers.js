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
  const response = [
    {
      'id': 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      'startTime': '2017-07-21T12:00:00Z',
      'endTime': '2017-07-21T17:00:00Z'
    },
    {
      'id': '8d1762b9-f6e7-43c5-86c2-778bacb602e2',
      'startTime': '2017-07-22T09:00:00Z',
      'endTime': '2017-07-22T12:00:00Z'
    },
    {
      'id': 'b596d313-2b39-43ad-a76a-3b824eb56daf',
      'startTime': '2017-07-22T12:00:00Z',
      'endTime': '2017-07-22T17:00:00Z'
    }
  ]

  cy.intercept('GET', `${api_url}/availability*`, {
    statusCode: 201,
    body: response
  });
}


export {
  intercept_address_search,
  intercept_availability_search
}
