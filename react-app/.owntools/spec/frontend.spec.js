describe("home", () => {
  it("renders something", () => {
    cy.visit("/");
    cy.get("#app").should("contain", "Hello");
  });
});
