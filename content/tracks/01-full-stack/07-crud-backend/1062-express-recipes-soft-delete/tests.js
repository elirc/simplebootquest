// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/recipes/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/recipes");
  expect(res2.body).toEqual(["Shakshuka","Curry","Risotto","Chili","Ramen","Paella","Tacos"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/recipes/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/recipes/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
