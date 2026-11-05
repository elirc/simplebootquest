// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/tickets").send({"subject":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"subject":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/tickets").send({"subject":"BUG IN EXPORT"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Ticket already exists"});
});
