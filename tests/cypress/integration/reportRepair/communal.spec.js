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
            'Communal areas are any spaces that are shared with other residents.' +
            ' For example, this would include gardens, lifts, corridors, or car parks.'
          );
        });
    });
  });

  context('When a user doesn\'t select any option', ()=>{
    it('an error should be shown',  () => {
      cy.wait(150)
      cy.get('button').click()
      cy.get('button').click({force: true}).then(()=>{
        cy.contains('Required');
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
    });
  });
});
