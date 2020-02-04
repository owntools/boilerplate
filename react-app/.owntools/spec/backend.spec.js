const serverUrl = Cypress.config("serverUrl");
const postsUrl = `${serverUrl}/posts`;

describe("backend", () => {
  describe("/posts", () => {
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
});
