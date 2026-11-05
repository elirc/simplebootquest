// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("works normally", async () => {
  const res = await request(app).get("/plants/1");
  expect(res.status).toBe(200);
});

test("errors become safe 500s", async () => {
  const res = await request(app).get("/plants/0");
  expect(res.status).toBe(500);
  expect(res.body).toEqual({"error":"Internal server error"});
});

test("unknown routes get JSON 404s", async () => {
  const res = await request(app).get("/nope");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Route not found"});
});
