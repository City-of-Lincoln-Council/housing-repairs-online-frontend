import {
  navigateToLocation
} from '../../support/helpers';

describe('repairProblem', () => {

  context('kitchen', () => {
    before(() => {
      navigateToLocation()
      cy.contains('Kitchen').click();
      cy.get('button').click();
    });

    it('displays the repair problem question', () => {
      cy.contains('What is the problem?');
    });

    it('displays a "cupboards" option', () => {
      cy.contains('Cupboards, including damaged cupboard doors');
    });

    it('displays a "walls" option', () => {
      cy.contains('Walls, floor or ceiling, excluding damp');
    });
  });

  context('Bathroom', () => {
    before(() => {
      navigateToLocation()
      cy.contains('Bathroom').click();
      cy.get('button').click();
    });

    it('displays the repair problem question', () => {
      cy.contains('What is the problem?');
    });

    it('displays a "walls" option', () => {
      cy.contains('Walls, floor or ceiling, excluding damp');
    });
  });

  context('Bedroom', () => {
    before(() => {
      navigateToLocation()
      cy.contains('Bedroom').click();
      cy.get('button').click();
    });

    it('displays the repair problem question', () => {
      cy.contains('What is the problem?');
    });

    it('displays a "walls" option', () => {
      cy.contains('Walls, floor or ceiling, excluding damp');
    });
  });

  context('Living Areas', () => {
    before(() => {
      navigateToLocation();
      cy.contains('Living Areas').click();
      cy.get('button').click();
    });

    it('displays the repair problem question', () => {
      cy.contains('What is the problem?');
    });

    it('displays a "walls" option', () => {
      cy.contains('Walls, floor or ceiling, excluding damp');
    });
  });
});
