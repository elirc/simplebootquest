// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("works normally", async () => {
  const res = await request(app).get("/recipes/1");
  expect(res.status).toBe(200);
});

test("errors become safe 500s", async () => {
  const res = await request(app).get("/recipes/0");
  expect(res.status).toBe(500);
  expect(res.body).toEqual({"error":"Internal server error"});
});

test("unknown routes get JSON 404s", async () => {
  const res = await request(app).get("/nope");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Route not found"});
});
