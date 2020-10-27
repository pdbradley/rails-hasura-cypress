/// <reference types="cypress" />

context('Dogs', () => {
  beforeEach(() => {
    cy.visit('/dogs');
  });

  it('Verifies Fixture Data', () => {
    // verify fixture is there already
    cy.contains('Spot').should('be.visible');
    cy.contains('Pug').should('be.visible');
  });

  it('Creates a new Dog', () => {
    cy.contains('New Dog').click();
    cy.get('#dog_name').type('Beans');
    cy.get('#dog_breed').type('Mutt');
    cy.contains('Create Dog').click();
    cy.contains('Back').click();

    cy.location('pathname').should('eq', '/dogs');
    cy.contains('Beans').should('be.visible');
    cy.contains('Mutt').should('be.visible');
  });

  it('Verifies Data within Ag Grid', () => {
    assertCellValueInRowColumnId(0, 'make', 'Toyota');
    assertCellValueInRowColumnId(0, 'model', 'Celica');
    assertCellValueInRowColumnId(0, 'price', '35000');

    assertCellValueInRowColumnId(1, 'make', 'Ford');
    assertCellValueInRowColumnId(1, 'model', 'Mondeo');
    assertCellValueInRowColumnId(1, 'price', '32000');
  });

  function assertCellValueInFirstRow(colId, value) {
    cy.get('.ag-center-cols-container .ag-row')
      .first()
      .find(`[col-id="${colId}"]`)
      .then(cell => {
        expect(cell).to.have.text(value);
      });
  }

  function assertCellValueInRowColumnId(row, colId, value) {
    cy.get('.ag-center-cols-container .ag-row')
      .eq(row)
      .find(`[col-id="${colId}"]`)
      .then(cell => {
        expect(cell).to.have.text(value);
      });
  }
});
