describe('Not eligible communal repair', () => {
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
    cy.contains('Yes').click();
    cy.get('button').click();
  });

  it('should redirect them to not eligible non emergency page',  () => {
    cy.url().should('include', '/report-repair/not-eligible-communal-repairs');
    cy.contains('For communal repairs please call us during the office hours below');
  });
});
