import {
  intercept_address_search,
  navigateToPageSelectRadioOptionAndContinue,
  navigateToPageTypeInputTextAndContinue
} from '../../support/helpers';

describe('repairProblemBestDescription', () => {
  const address = '1 Downing Street, London, SW1A 2AA';

  beforeEach(() => {
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
      cy.get('select').select(address)
      cy.get('button').click();
    });
  });

  it('displays the repair issue question', () => {
    cy.contains('Kitchen').click();
    cy.get('button').click();
    cy.contains('Cupboards, including damaged cupboard doors').click();
    cy.get('button').click();
    cy.contains('What best describes the problem?');
  });

  context('kitchen', () => {
    beforeEach(()=>{
      cy.contains('Kitchen').click();
      cy.get('button').click();
    });

    context('cupboards', () => {
      beforeEach(()=>{

        cy.contains('Cupboards, including damaged cupboard doors').click();
        cy.get('button').click();
      })

      it('displays a "Hanging door" option', () => {
        cy.contains('Hanging door');
      });

      it('displays a "Missing door" option', () => {
        cy.contains('Missing door');
      });
    })

  });
});
