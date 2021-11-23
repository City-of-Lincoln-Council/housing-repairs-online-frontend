import {intercept_address_search} from '../../support/helpers';

describe('repairLocation', () => {
  beforeEach(() => {
    intercept_address_search();
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('No, I want to request a non-emergency repair').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click().then(()=>{
      cy.get('input.govuk-input').type('SW1A 2AA');
      cy.get('button').click();
    });
    cy.get('[data-cy=SectionLoaded]', { timeout: 10000 }).then(($loadedSection) => {
      cy.get('select').select('1 Downing Street, London, SW1A 2AA')
      cy.get('button').click();
    });
  });

  it('displays the repair location question', () => {
    cy.contains('Where is the problem located?');
  });

  context('repair location options', () => {
    it('displays "Kitchen" as an option', () => {
      cy.contains('Kitchen');
    });

    it('displays "Bathroom" as an option', () => {
      cy.contains('Bathroom');
    });

    it('displays "Bedroom" as an option', () => {
      cy.contains('Bedroom');
    });

    it('displays "Living Areas" as an option', () => {
      cy.contains('Living Areas');
    });

    it('displays "Outside" as an option', () => {
      cy.contains('Outside');
    });
  });

  context('When a user doesn\'t select anything', ()=>{
    it.only('should show required message',  () => {
      cy.wait(150);
      cy.get('button').click({force: true}).then(()=>{
        cy.contains('Required');
      });
    });
  });

  context('When a user selects: Kitchen', ()=>{
    context('by clicking the label', ()=>{
      it('should redirect them to kitchen repair type page',  () => {
        cy.contains('Kitchen').click();
        cy.get('button').click()
        cy.url().should('include', '/report-repair/repair-kitchen-types');
      });
    });
    context('by checking the radio button', ()=>{
      it('should redirect them to kitchen repair type page',  () => {
        cy.get('[value="kitchen"]').check();
        cy.get('button').click()
        cy.url().should('include', '/report-repair/repair-kitchen-types');
      });
    });
  });

  xcontext('When a user selects an option', ()=>{
    it('should be selected when they navigate back to the page',  () => {
      cy.contains('Kitchen').click();
      cy.get('button').click()
      cy.contains('Back').click()
      cy.get('[value="kitchen"]').should('be.checked')
    });
  });
});
