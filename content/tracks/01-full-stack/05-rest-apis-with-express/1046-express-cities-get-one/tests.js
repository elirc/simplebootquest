// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/cities/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"name":"Seoul","population":1420,"avgTemp":14,"continent":"Europe"});
});

test("missing", async () => {
  const res = await request(app).get("/cities/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/cities/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
