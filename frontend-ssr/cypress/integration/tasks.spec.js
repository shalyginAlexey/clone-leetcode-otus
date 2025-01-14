describe("Task List", () => {
  it("should display a list of tasks", () => {
    cy.visit("/tasks");
    cy.get(".task-list").should("exist");
    cy.get(".task-list li").should("have.length", 2);
  });
});
