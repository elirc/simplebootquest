// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/employees/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"name":"Margaret","salary":117030,"yearsAtCompany":7,"team":"product","level":"mid","remote":true});
});

test("missing", async () => {
  const res = await request(app).get("/employees/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/employees/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
