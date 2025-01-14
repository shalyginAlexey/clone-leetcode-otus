describe("User List", () => {
  it("should display a list of users", () => {
    cy.visit("/users");
    cy.get(".user-list").should("exist");
    cy.get(".user-list li").should("have.length", 2);
  });
});
