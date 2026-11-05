// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/repos/by-language");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"TypeScript":5,"Go":2,"Python":1});
});
