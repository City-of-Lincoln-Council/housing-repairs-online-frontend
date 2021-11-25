import {intercept_address_search} from '../../support/helpers';

describe('repairProblem', () => {
  beforeEach(() => {
    intercept_address_search();
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('No, I want to request a non-emergency repair').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click().then(() => {
      cy.get('input.govuk-input').type('SW1A 2AA');
      cy.get('button').click();
    });
    cy.get('[data-cy=SectionLoaded]', {timeout: 10000}).then(() => {
      cy.get('select').select('1 Downing Street, London, SW1A 2AA')
      cy.get('button').click();
    });
    cy.contains('Kitchen').click();
    cy.get('button').click();
    cy.contains('Cupboards, including damaged cupboard doors').click();
    cy.get('button').click();
  });

  it('displays the repair issue question', () => {
    cy.contains('What is the problem?');
  });

  context('kitchen', () => {
    it('displays a "Hanging door" option', () => {
      cy.contains('Hanging door');
    });

    it('displays a "Missing door" option', () => {
      cy.contains('Missing door');
    });
  });
});
