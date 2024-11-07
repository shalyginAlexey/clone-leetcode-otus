import request from "supertest";
import app from "../index";
import sequelize from "../config/db";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({
        title: "Two Sum",
        description: "Find two numbers that add up to a target.",
        difficulty: "Easy",
        tags: ["array", "hashmap"],
        examples: [{ input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" }],
        additional_materials: ["https://example.com"],
        rating: 5,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});
