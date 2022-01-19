import {
  navigateToLocation
} from '../../support/helpers';

describe('repairProblemBestDescription', () => {

  context('kitchen', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Kitchen').click();
      cy.get('button').click();
    });

    context('cupboards', () => {
      before(()=>{
        cy.contains('Cupboards, including damaged cupboard doors').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Hanging door" option', () => {
        cy.contains('Hanging door');
      });

      it('displays a "Missing door" option', () => {
        cy.contains('Missing door');
      });
    })

    context('Walls, floor or ceiling, excluding damp', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Wall tiles" option', () => {
        cy.contains('Wall tiles');
      });

      it('displays a "Floor tiles" option', () => {
        cy.contains('Floor tiles');
      });

      it('displays a "Light fitting(s)" option', () => {
        cy.contains('Light fitting(s)');
      });

      it('displays a "Skirting boards or architraves" option', () => {
        cy.contains('Skirting boards or architraves');
      });

      it('displays a "Plastering on the ceiling" option', () => {
        cy.contains('Plastering on the ceiling');
      });

      it('displays a "Plastering on the walls" option', () => {
        cy.contains('Plastering on the walls');
      });

      it('displays a "Wooden floorboards" option', () => {
        cy.contains('Wooden floorboards');
      });
    });

  })

  context('bathroom', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Bathroom').click();
      cy.get('button').click();
    });

    context('Walls, floor or ceiling, excluding damp', () => {
      before(()=>{
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Wall tiles" option', () => {
        cy.contains('Wall tiles');
      });

      it('displays a "Floor tiles" option', () => {
        cy.contains('Floor tiles');
      });

      it('displays a "Light fitting(s)" option', () => {
        cy.contains('Light fitting(s)');
      });

      it('displays a "Skirting boards or architraves" option', () => {
        cy.contains('Skirting boards or architraves');
      });

      it('displays a "Plastering on the ceiling" option', () => {
        cy.contains('Plastering on the ceiling');
      });

      it('displays a "Plastering on the walls" option', () => {
        cy.contains('Plastering on the walls');
      });

      it('displays a "Wooden floorboards" option', () => {
        cy.contains('Wooden floorboards');
      });
    });

  });

  context('bedroom', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Bedroom').click();
      cy.get('button').click();
    });

    context('Walls, floor or ceiling, excluding damp', () => {
      before(()=>{
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Wall tiles" option', () => {
        cy.contains('Wall tiles');
      });

      it('displays a "Floor tiles" option', () => {
        cy.contains('Floor tiles');
      });

      it('displays a "Light fitting(s)" option', () => {
        cy.contains('Light fitting(s)');
      });

      it('displays a "Skirting boards or architraves" option', () => {
        cy.contains('Skirting boards or architraves');
      });

      it('displays a "Plastering on the ceiling" option', () => {
        cy.contains('Plastering on the ceiling');
      });

      it('displays a "Plastering on the walls" option', () => {
        cy.contains('Plastering on the walls');
      });

      it('displays a "Wooden floorboards" option', () => {
        cy.contains('Wooden floorboards');
      });
    });

  });

  context('living areas', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Living Areas').click();
      cy.get('button').click();
    });

    context('Walls, floor or ceiling, excluding damp', () => {
      before(()=>{
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Wall tiles" option', () => {
        cy.contains('Wall tiles');
      });

      it('displays a "Floor tiles" option', () => {
        cy.contains('Floor tiles');
      });

      it('displays a "Light fitting(s)" option', () => {
        cy.contains('Light fitting(s)');
      });

      it('displays a "Skirting boards or architraves" option', () => {
        cy.contains('Skirting boards or architraves');
      });

      it('displays a "Plastering on the ceiling" option', () => {
        cy.contains('Plastering on the ceiling');
      });

      it('displays a "Plastering on the walls" option', () => {
        cy.contains('Plastering on the walls');
      });

      it('displays a "Wooden floorboards" option', () => {
        cy.contains('Wooden floorboards');
      });
    });

  });
});
