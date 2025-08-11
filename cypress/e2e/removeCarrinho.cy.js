describe("Remove uma HQ do carrinho", () => {
    it("Adiciona e depois remove uma HQ do carrinho", () => {
        cy.visit('http://localhost:3000/');
        cy.get("[data-testid='hq-comprar']").should("exist").first().click();

        cy.get("[data-testid='carrinho']").should("be.visible").click();
        cy.url().should("include", "/carrinho");

        cy.contains("Remover").should("be.visible").click();
        cy.contains("Seu carrinho está vazio").should("be.visible");
    })
})