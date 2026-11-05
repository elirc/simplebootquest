// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/employees/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/employees");
  expect(res2.body).toEqual(["Tim","Katherine","Frances","Ken","Dennis","Alan","Grace"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/employees/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/employees/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
