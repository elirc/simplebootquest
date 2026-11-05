// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/recipes?sort=minutes&order=desc");
  expect(res.body).toEqual(["Curry","Chili","Tacos","Ramen","Paella","Shakshuka","Pancakes","Risotto"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/recipes?sort=name");
  expect(res.body).toEqual(["Chili","Curry","Paella","Pancakes","Ramen","Risotto","Shakshuka","Tacos"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/recipes?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
