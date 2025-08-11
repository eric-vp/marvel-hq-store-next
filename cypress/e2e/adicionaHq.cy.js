describe("Comprar uma HQ", () => {
    it("Adiciona uma Hq no carrinho pela home page e também pela tela de detalhes", () => {
        cy.visit('http://localhost:3000/');
        cy.get("[data-testid='hq-comprar']").should("exist").first().click();

        cy.get("img[data-testid='hq-img']").first().click();
        cy.url().should("include", "/detalhes");
        cy.get("[data-testid='hq-comprar']").should("be.visible").click();

        cy.get("[data-testid='carrinho']").should("be.visible").click();
        cy.url().should("include", "/carrinho");
        cy.contains("Quantidade: 2").should("be.visible");
    })
})