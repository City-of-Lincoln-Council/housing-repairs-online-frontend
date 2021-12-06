describe('postcode', () => {
  before(() => {
    cy.visit('http://localhost:3000/report-repair/contact-details');
  });

  it('displays the question', () => {
    cy.contains('How should we confirm the appointment?');
  });

  it('displays option', () => {
    cy.contains('Text message (recommended)');
    cy.contains('Email');
  });

  it('displays button with correct text', () => {
    cy.get('button').contains('Continue');
  });

  context('When a user doesn\'t select anything', ()=>{
    it('text fields are not displayed', () => {
      cy.get('input#contactDetails-text').should('not.be.visible');
      cy.get('input#contactDetails-email').should('not.be.visible');
    });

    it('an error should be shown',  () => {
      cy.get('button').click()
      cy.contains('Required');
    });
  });

  context('When a user selects text option', ()=>{
    it('text input should be visible ', () => {
      cy.contains('Text message (recommended)').click();
      cy.get('input#contactDetails-text').should('be.visible');
      cy.get('input#contactDetails-email').should('not.be.visible');
    });

    context('When a user doesn\'t type anything', ()=>{
      it('an error is displayed', () => {
        cy.get('button').click()
        cy.contains('Required');
      });
    });

    context('When a user types in an invalid number', ()=>{
      it('an error is displayed', () => {
        cy.get('input#contactDetails-text').type('12345');
        cy.get('button').click()
        cy.contains('Not a valid uk number');
      });
    });
  })

  context('When a user selects email option', ()=>{
    it('text input should be visible ', () => {
      cy.contains('Email').click();
      cy.get('input#contactDetails-text').should('not.be.visible');
      cy.get('input#contactDetails-email').should('be.visible');
    });

    context('When a user doesn\'t type anything', ()=>{
      it('an error is displayed', () => {
        cy.get('button').click()
        cy.contains('Required');
      });
    });

    context('When a user types in an invalid number', ()=>{
      it('an error is displayed', () => {
        cy.get('input#contactDetails-email').type('abcde');
        cy.get('button').click()
        cy.contains('Not a valid email');
      });
    });
  });

});
