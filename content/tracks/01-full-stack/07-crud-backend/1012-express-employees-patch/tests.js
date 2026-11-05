// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/employees/3").send({"yearsAtCompany":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Katherine","salary":146421,"yearsAtCompany":42,"team":"data","level":"mid","remote":true});
});

test("missing", async () => {
  const res = await request(app).patch("/employees/999").send({"yearsAtCompany":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
