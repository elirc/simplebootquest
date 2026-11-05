// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/recipes/3").send({"minutes":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Curry","minutes":42,"calories":800,"cuisine":"italian","difficulty":"medium","vegetarian":false});
});

test("missing", async () => {
  const res = await request(app).patch("/recipes/999").send({"minutes":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
