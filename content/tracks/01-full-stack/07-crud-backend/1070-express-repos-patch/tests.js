// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/repos/3").send({"stars":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"infra","stars":42,"openIssues":109,"language":"Python","archived":false});
});

test("missing", async () => {
  const res = await request(app).patch("/repos/999").send({"stars":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
