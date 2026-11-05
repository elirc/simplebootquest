// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/repos?sort=stars&order=desc");
  expect(res.body).toEqual(["cli","docs","mobile","analytics","web-app","infra","billing","api-gateway"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/repos?sort=name");
  expect(res.body).toEqual(["analytics","api-gateway","billing","cli","docs","infra","mobile","web-app"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/repos?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
