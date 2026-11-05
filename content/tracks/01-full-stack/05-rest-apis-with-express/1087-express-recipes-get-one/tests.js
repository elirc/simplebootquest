// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/recipes/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"name":"Pancakes","minutes":39,"calories":529,"cuisine":"asian","difficulty":"medium","vegetarian":true});
});

test("missing", async () => {
  const res = await request(app).get("/recipes/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/recipes/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
