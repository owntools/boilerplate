describe("posts API", () => {
  const postsUrl = `${Cypress.config("serverUrl")}/posts`;
  it("returns JSON", () => {
    cy.request(postsUrl)
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it("loads 1 item", () => {
    cy.request(postsUrl)
      .its("body")
      .should("have.length", 1);
  });
});
