// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/employees?sort=salary&order=desc");
  expect(res.body).toEqual(["Katherine","Frances","Ken","Margaret","Alan","Dennis","Grace","Tim"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/employees?sort=name");
  expect(res.body).toEqual(["Alan","Dennis","Frances","Grace","Katherine","Ken","Margaret","Tim"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/employees?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
