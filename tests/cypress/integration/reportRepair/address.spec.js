import {intercept_address_search} from '../../support/helpers';

function setup_addresses_search(setup_addresses_API) {
  setup_addresses_API();
  cy.visit('http://localhost:3000/report-repair/address');
}

describe('address', () => {

  describe('Content and interaction', () => {
    beforeEach(() => {
      setup_addresses_search(intercept_address_search);
    });

    it('displays the label', () => {
      cy.contains('Select an address');
    });

    it('button displays correct text', () => {
      cy.get('button').contains('Tell us where the problem is');
    });

    it('contains a can\t find my address link', () => {
      cy.contains('I can\'t find my address').click();
      cy.url().should('include', '/report-repair/not-eligible');
    });

    context('When a user doesn\'t select anything', ()=>{
      it('an error should be shown',  () => {
        cy.get('button').click()
        cy.contains('Required');
      });
    });
  });

  describe('API addresses with nulls', () => {
    context('When API addresses contain \'nulls\' they are not displayed', () => {
      it('address line 1 is null', () => {
        setup_addresses_search(()=>intercept_address_search(1, 'SW1A 2AA', true))
        cy.get('select').contains(/^London, SW1A 2AA$/)
      });
      it('address line 2 is null', () => {
        setup_addresses_search(()=>intercept_address_search(1, 'SW1A 2AA', false, true));
        cy.get('select').contains(/^1 Downing Street, SW1A 2AA$/)
      });
    });
  });
});

