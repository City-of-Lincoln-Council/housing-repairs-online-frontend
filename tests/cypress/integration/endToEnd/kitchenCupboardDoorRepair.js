import {
  intercept_address_search,
  intercept_availability_search
} from '../../support/helpers';

describe('Kitchen cupboard door repair', () => {
  before(()=>{
    cy.visit('http://localhost:3000/report-repair/');
  })

  it('displays priority list page', () => {
    cy.contains('Are you having one of the emergencies below?');
    cy.contains('No, I want to request a non-emergency repair').click();
    cy.get('button').click();
  });

  it('displays communal page', () => {
    cy.url().should('include', '/report-repair/communal');
    cy.contains('Is the problem in a communal area?');
    cy.contains('No').click();
    cy.get('button').click();
  });

  it('displays postcode page', () => {
    cy.url().should('include', '/report-repair/postcode');
    cy.contains('What is the property address?');
    cy.get('input.govuk-input').type('SW1A 2AA');
    cy.get('button').click();
  });

  it('displays address page', () => {
    intercept_address_search();
    cy.url().should('include', '/report-repair/address');
    cy.get('[data-cy=SectionLoaded]', {timeout: 10000}).then(() => {
      cy.contains('Select an address');
      cy.get('select').select('1 Downing Street, London, SW1A 2AA')
      cy.get('button').click();
    });
  });

  it('displays repair location page', () => {
    cy.url().should('include', '/report-repair/repair-location');
    cy.contains('Where is the problem located?');
    cy.contains('Kitchen').click();
    cy.get('button').click();
  });

  it('displays repair problem page', () => {
    cy.url().should('include', '/report-repair/repair-kitchen-problems');
    cy.contains('What is the problem?');
    cy.contains('Cupboards, including damaged cupboard doors').click();
    cy.get('button').click();
  });

  it('displays repair problem description page', () => {
    cy.url().should('include', '/report-repair/repair-kitchen-cupboard-problems');
    cy.contains('What best describes the problem?');
    cy.contains('Hanging door').click();
    cy.get('button').click();
  });

  it('displays repair description page', () => {
    cy.url().should('include', '/report-repair/repair-description');
    cy.contains('Describe your problem in more detail');
    cy.get('#description').type('Eius postea venit saepius arcessitus.');
    cy.get('button').click();
  });

  it('displays availability page', () => {
    intercept_availability_search();
    cy.url().should('include', '/report-repair/repair-availability');
    cy.contains('When are you available?');
    cy.contains('1:00pm to 6:00pm').click();
    cy.get('button').click();
  });
});
