// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/recipes/by-difficulty");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"easy":3,"medium":2,"hard":3});
});
