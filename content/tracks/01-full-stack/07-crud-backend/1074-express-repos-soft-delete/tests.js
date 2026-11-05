// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/repos/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/repos");
  expect(res2.body).toEqual(["billing","infra","web-app","api-gateway","analytics","mobile","cli"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/repos/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/repos/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
