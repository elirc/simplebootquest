// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/cars/3").send({"year":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"model":"Model 3","priceK":39,"km":89121,"year":42,"fuel":"hybrid"});
});

test("missing", async () => {
  const res = await request(app).patch("/cars/999").send({"year":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
