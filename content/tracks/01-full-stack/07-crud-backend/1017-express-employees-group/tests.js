// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/employees/by-level");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"senior":4,"mid":3,"junior":1});
});
