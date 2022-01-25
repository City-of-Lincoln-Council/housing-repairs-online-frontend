import {
  navigateToLocation
} from '../../support/helpers';

const genericWhatIsTheProblemOptions = () => {
  it('displays the repair problem question', () => {
    cy.contains('What is the problem?');
  });

  it('displays a "walls" option', () => {
    cy.contains('Walls, floor or ceiling, excluding damp');
  });

  it('displays a "electrics" option', () => {
    cy.contains('Electrics, including lights and switches');
  });

}
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

    it('displays a "electrical" option', () => {
      cy.contains('Electrical, including extractor fans and lightbulbs');
    });

    it('displays a "door" option', () => {
      cy.contains('Damaged or stuck doors');
    });

    it('displays a "heating" option', () => {
      cy.contains('Heating or hot water');
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

    genericWhatIsTheProblemOptions();
  });

  context('Living Areas', () => {
    before(() => {
      navigateToLocation();
      cy.contains('Living Areas').click();
      cy.get('button').click();
    });

    it('displays a "walls" option', () => {
      genericWhatIsTheProblemOptions();

    });
  });
});
