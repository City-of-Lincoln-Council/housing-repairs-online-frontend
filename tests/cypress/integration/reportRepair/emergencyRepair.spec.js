describe('emergencyRepair', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report-repair/emergency-repair/');
  });

  it('displays the heading', () => {
    cy.contains('Your repair could be an emergency');
  });
});
