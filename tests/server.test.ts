import request from "supertest";
import { setupServer } from "../src/server";

describe("the server", () => {
  it("responds to all requests with an <h1>", async () => {
    const app = setupServer();
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toMatch(/<h1>.+?<\/h1>/);
  });
});
