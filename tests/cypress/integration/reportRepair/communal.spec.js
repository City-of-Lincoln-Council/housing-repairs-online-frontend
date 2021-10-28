import {intercept_address_search} from "../../support/helpers";

describe('communal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('Something else').click();
    cy.get('button').click()
  });

  it('displays the question', () => {
    cy.contains('Is the issue in a communal area?');
  });

  context('communal area prompt', () => {
    it('displays text', () => {
      cy.get('[data-testid=communal-area-prompt]').should(
        'have.contain',
        'Which areas are communal?'
      );
    });

    it('displays instructions when clicked', () => {
      cy.get('details > summary')
        .click()
        .then(() => {
          cy.get('[data-testid=communal-area-info]').should('be.visible').should(
            'contain',
            'Communal repairs are usually in areas that people share.'
          );
        });
    });
  });

  context('When a user selects: Yes', ()=>{
    it('should redirect them to not eligible non emergency page',  () => {
      cy.contains('Yes').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/not-eligible-communal-repairs');
    });
  });

  context('When a user selects: No', ()=>{
    beforeEach(() => {
      intercept_address_search();
      cy.contains('No').click();
      cy.get('button').click()
    });
    it('should redirect them to postcode then address page respectively',  () => {
      cy.url().should('include', '/report-repair/postcode');
      cy.get('input').type('SW1A 2AA');
      cy.get('button').click()
      cy.url().should('include', '/report-repair/address');
    });
    it('and then it will redirect them to the not eligible if they click cannot find my address',  () => {
      cy.get('input').type('SW1A 2AA');
      cy.get('button').click()
      cy.contains('I can\'t find my address').click();
      cy.url().should('include', '/report-repair/not-eligible');
    });

  });

  context('When a user doesn\'t select any option', ()=>{
    it('an error should be shown',  () => {
      cy.get('button').click()
      cy.contains('Required');
    });
  });

  context('When a user doesn\'t select anything', ()=>{
    it('should show required message',  () => {
      cy.get('button').click()
      cy.contains('Required');
    });
  })
});
