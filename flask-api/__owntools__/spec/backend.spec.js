const serverUrl = Cypress.env("serverUrl");
const rootUrl = `${serverUrl}/`;

describe("backend", () => {
  describe("/posts", () => {
    it("returns JSON", () => {
      cy.request(rootUrl)
        .its("headers")
        .its("content-type")
        .should("include", "application/json");
    });
  });
});
