// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/recipes");
  expect(res.body).toEqual({"data":["Shakshuka","Pancakes","Curry"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/recipes?page=2&limit=2");
  expect(res.body).toEqual({"data":["Curry","Risotto"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/recipes?limit=50");
  expect(res.body).toEqual({"data":["Shakshuka","Pancakes","Curry","Risotto","Chili"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/recipes?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Shakshuka","Pancakes","Curry"],"meta":{"page":1,"limit":3,"total":8}});
});
