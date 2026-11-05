// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/tasks").send({"title":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/tasks").send({"title":"REFACTOR AUTH"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Task already exists"});
});
