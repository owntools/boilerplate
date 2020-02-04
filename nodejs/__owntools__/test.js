import main from "../app";

test("solution return value", async () => {
  expect(await main()).toBe(undefined);
});
