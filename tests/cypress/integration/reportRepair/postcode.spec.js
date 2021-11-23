describe('postcode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('No, I want to request a non-emergency repair').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click()
  });

  it('displays the question', () => {
    cy.contains('What is the property address?');
  });

  it('displays input label', () => {
    cy.contains('Postcode');
  });

  it('displays button with correct text', () => {
    cy.get('button').contains('Select your address');
  });
  context('When a user doesn\'t type anything', ()=>{
    it('an error should be shown',  () => {
      cy.get('button').click()
      cy.contains('Required');
    });
  });

  context('When a user types not a valid postcode', ()=>{
    it('an error should be shown',  () => {
      cy.get('input').type('postcode');
      cy.get('button').click()
      cy.contains('Not a valid postcode');
    });
  });

  context('When a user type a valid postcode', ()=>{
    it('the user proceeds to the address selection',  () => {
      cy.get('input').type('SW1A 2AA');
      cy.get('button').click()
      cy.url().should('include', '/report-repair/address');
    });
  });

  context('When a user type a valid postcode and returns to change it', ()=>{
    it('the field is changeable',  () => {
      cy.get('input.govuk-input').type('SW1A 2AA');
      cy.get('button').click()
      cy.contains('Back').click();
      cy.get('input').type('hello');
    });
  });

});
