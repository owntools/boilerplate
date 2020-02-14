import request from "supertest";

const { API_URL } = process.env;
if (!API_URL) throw new Error(`invalid API_URL: ${API_URL}. check env vars.`);

describe("/", () => {
  it("responds with json", async () => {
    const res = await request(API_URL)
      .get("/")
      .set("Accept", "application/json");

    expect(res.header["content-type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(200);
  });
});
