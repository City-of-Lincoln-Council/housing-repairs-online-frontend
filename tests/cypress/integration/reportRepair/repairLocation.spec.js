import {intercept_address_search} from '../../support/helpers';

function getToRepairLocation() {
  intercept_address_search();
  cy.visit('http://localhost:3000/report-repair/');
  cy.contains('No, I want to request a non-emergency repair').click();
  cy.get('button').click();
  cy.get('[data-cy=communal]', {timeout: 10000}).then(($loadedSection) => {
    cy.contains('No').click({force: true});
    cy.get('button').click().then(() => {
      cy.wait(100)
      cy.get('input.govuk-input').type('SW1A 2AA');
      cy.get('button').click();
    });
  });
  cy.get('[data-cy=address]', {timeout: 10000}).then(($loadedSection) => {
    cy.get('select').select('1 Downing Street, London, SW1A 2AA')
    cy.get('button').click();
  });
}

describe('repairLocation', () => {
  before(() => {
    getToRepairLocation();
  });

  it('displays the repair location question', () => {
    cy.contains('Where is the problem?');
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
    it('should show required message',  () => {
      cy.get('button').click().then(()=>{
        cy.contains('Required');
      });
    });
  });

  context('When a user selects: Kitchen', ()=>{
    beforeEach(()=>{
      getToRepairLocation();
    })
    context('by clicking the label', ()=>{
      it('should redirect them to kitchen repair type page',  () => {
        cy.contains('Kitchen').click();
        cy.get('button').click()
        cy.url().should('include', '/report-repair/repair-kitchen-problems');
      });
    });
    context('by checking the radio button', ()=>{
      it('should redirect them to kitchen repair type page',  () => {
        cy.get('[value="kitchen"]').check();
        cy.get('button').click()
        cy.url().should('include', '/report-repair/repair-kitchen-problems');
      });
    });
  });

  context('When a user selects an option', ()=>{
    beforeEach(()=>{
      getToRepairLocation();
    })

    it('should be selected when they navigate back to the page',  () => {
      cy.contains('Kitchen').click();
      cy.get('button').click();
      cy.get('[data-cy=repair-problem]', {timeout: 10000}).then(() => {
        cy.contains('Back').click({force: true});
      });
      cy.url().should('eq', 'http://localhost:3000/report-repair/repair-location');
      cy.get('[value="kitchen"]').should('be.checked')
    });
  });
});
