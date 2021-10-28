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
    cy.get('[data-testid=landing-page-gas-warning]').should(
      'have.contain',
      'If you suspect you have a gas leak, you must report it ' +
      'immediately to the Gas Emergency Service on 0800 111 999 or via ' +
      'textphone (minicom) on 0800 371 787'
    );
  });

  it('displays a emergency repair warning on the landing page', () => {
    cy.get('[data-testid=landing-page-emergency-warning]').should(
      'have.contain',
      'For other emergency repairs, please see customer services ' +
      'contact details page.'
    );
    cy.get('[data-testid=landing-page-emergency-warning] a').should('have.attr', 'href', 'https://www.lincoln.gov.uk/contact-1/get-touch');;
  });

  it('displays a report limit warning on the landing page', () => {
    cy.get('[data-testid=landing-page-report-limit-warning]').should(
      'have.contain',
      'Please note, you can only report one problem at a time.'
    );
  });

  context('emergency prompt', () => {
    it('displays text', () => {
      cy.get('[data-testid=landing-page-emergency-prompt]').should(
        'have.contain',
        'What is an emergency?'
      );
    });

    it('displays instructions when clicked', () => {
      cy.get('[data-testid=landing-page-emergency-prompt] summary')
        .click()
        .then(() => {
          cy.get('[data-testid=landing-page-emergency-info]')
            .should('be.visible')
        });
    });
  });

  context('communal prompt', () => {
    it('displays text', () => {
      cy.get('[data-testid=landing-page-communal-prompt]').should(
        'have.contain',
        'Which areas are communal?'
      );
    });

    it('displays instructions when clicked', () => {
      cy.get('[data-testid=landing-page-communal-prompt] summary')
        .click()
        .then(() => {
          cy.get('[data-testid=landing-page-communal-info]')
            .should('be.visible')
        });
    });
  });

  it('displays a start button', () => {
    cy.get('a').contains('Start now').should('have.attr', 'href', '/report-repair');

  });
});
