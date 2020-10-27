/// <reference types="cypress" />

context('Dogs', () => {
  beforeEach(() => {
    cy.visit('/dogs');
  });

  it('Creates a new Dog', () => {
    // verify Ag Grid boilerplate
    cy.contains('Toyota').should('be.visible');

    // verify fixture is there already
    cy.contains('Spot').should('be.visible');
    cy.contains('Pug').should('be.visible');

    cy.contains('New Dog').click();
    cy.get('#dog_name').type('Beans');
    cy.get('#dog_breed').type('Mutt');
    cy.contains('Create Dog').click();
    cy.contains('Back').click();

    cy.location('pathname').should('eq', '/dogs');
    cy.contains('Beans').should('be.visible');
    cy.contains('Mutt').should('be.visible');
    cy.contains('Toyota').should('be.visible');
  });
});
