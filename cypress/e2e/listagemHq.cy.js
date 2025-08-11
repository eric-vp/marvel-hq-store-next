describe('Listagem das HQs', () => {
  it("Acessa a home page e exibe 10 cards na home page", () => {
    cy.visit('http://localhost:3000/')
    cy.get("div[data-testid='hq-card']").should("have.length", 10);
  });
});