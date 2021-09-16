describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays service title', () => {
    cy.contains('Housing Repairs Online');
  });

  it('displays correct phase banner', () => {
    cy.get('[data-testid=phase-banner]').should('have.contain', 'beta');
  });

  it('displays a smell gas warning on the landing page', () => {
    cy.get('[data-testid=landing-page-warning]').should(
      'have.contain',
      'If you can smell gas, please call the gas emergency number on: 0800 111 999.'
    );
  });

  context('smell gas prompt', () => {
    it('displays text', () => {
      cy.get('[data-testid=landing-page-gas-prompt]').should(
        'have.contain',
        'What to do now if you smell gas'
      );
    });

    it('displays instructions when clicked', () => {
      cy.get('details > summary')
        .click()
        .then(() => {
          cy.get('[data-testid=first-emergency-gas-option]').should(
            'have.contain',
            'Turn off the gas supply at the gas meter'
          );
        });
    });
  });
});
