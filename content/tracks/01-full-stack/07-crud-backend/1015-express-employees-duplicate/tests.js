// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/employees").send({"name":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/employees").send({"name":"TIM"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Employee already exists"});
});
