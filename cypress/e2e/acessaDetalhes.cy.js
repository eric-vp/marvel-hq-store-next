describe("Acessa a página de detalhes de uma HQ", () => {
    it("Clica em uma HQ e vai para a sua página de detalhes", () => {
        cy.visit('http://localhost:3000/');
        cy.get("img[data-testid='hq-img']").first().click();
        cy.url().should("include", "/detalhes");
    });
});