const request = require("supertest");
const app = require("../src/app");

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({
        title: "Two Sum",
        description: "Find two numbers that add up to a target.",
        difficulty: "Easy",
        tags: ["array", "hashmap"],
        examples: [{ input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" }],
        additional_materials: ["https://example.com"],
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});
