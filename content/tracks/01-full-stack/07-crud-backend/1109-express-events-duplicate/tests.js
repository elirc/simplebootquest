// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/events").send({"name":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/events").send({"name":"AI PANEL"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Event already exists"});
});
