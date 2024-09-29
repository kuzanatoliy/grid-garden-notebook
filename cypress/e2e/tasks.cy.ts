import { levels } from '../fixtures/levels';

describe('Flexbox Froggy', () => {
  it('Should open page', () => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('.title').should('contain', 'Flexbox Froggy');
  });

  const testLevel = (levelNumber) => {
    cy.visit('https://flexboxfroggy.com');
    cy.get('#level-indicator').click();
    cy.get(`.level-marker[data-level="${levelNumber}"]`).click();
    cy.get('#editor textarea').type(levels[levelNumber].join('\n'));
    cy.get('#next').should('not.have.class', 'disabled');
  };

  it('Should validate first task', () => {
    testLevel(0);
  });

  it('Should validate second task', () => {
    testLevel(1);
  });

  it('Should validate third task', () => {
    testLevel(2);
  });

  it('Should validate forth task', () => {
    testLevel(3);
  });

  it('Should validate fifth task', () => {
    testLevel(4);
  });

  it('Should validate sixth task', () => {
    testLevel(5);
  });

  it('Should validate seventh task', () => {
    testLevel(6);
  });

  it('Should validate eighth task', () => {
    testLevel(7);
  });

  it('Should validate nineth task', () => {
    testLevel(8);
  });

  it('Should validate tenth task', () => {
    testLevel(9);
  });

  it('Should validate eleventh task', () => {
    testLevel(10);
  });

  it('Should validate twelfth task', () => {
    testLevel(11);
  });

  it('Should validate thirteenth task', () => {
    testLevel(12);
  });

  it('Should validate forteenth task', () => {
    testLevel(13);
  });

  it('Should validate fifteenth task', () => {
    testLevel(14);
  });

  it('Should validate sixteenth task', () => {
    testLevel(15);
  });

  it('Should validate seventeenth task', () => {
    testLevel(16);
  });

  it('Should validate eighteenth task', () => {
    testLevel(17);
  });

  it('Should validate nineteenth task', () => {
    testLevel(18);
  });

  it('Should validate twentyth task', () => {
    testLevel(19);
  });

  it('Should validate twenty first task', () => {
    testLevel(20);
  });

  it('Should validate twenty second task', () => {
    testLevel(21);
  });

  it('Should validate twenty third task', () => {
    testLevel(22);
  });

  it('Should validate twenty fourth task', () => {
    testLevel(23);
  });
});
