// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/cities/3").send({"population":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Quito","population":42,"avgTemp":6,"continent":"Americas"});
});

test("missing", async () => {
  const res = await request(app).patch("/cities/999").send({"population":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
