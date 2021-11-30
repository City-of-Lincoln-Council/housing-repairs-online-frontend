describe('communal', () => {
  before(() => {
    cy.visit('http://localhost:3000/report-repair/communal');
  });

  it('displays the question', () => {
    cy.contains('Is the problem in a communal area?');
  });

  it('displays button with correct text', () => {
    cy.get('button').contains('Provide your postcode');
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
            'Communal repairs are usually in areas that people share'
          );
        });
    });
  });

  context('When a user doesn\'t select any option', ()=>{
    it('an error should be shown',  () => {
      cy.wait(150)
      cy.get('button').click({force: true}).then(()=>{
        cy.contains('Required');
      });
    });
  });

});
