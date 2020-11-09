/// <reference types="cypress" />

context('Hasura', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });

  it('Verifies Fixture Data', () => {});
});
