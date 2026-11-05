// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/flights").send({"number":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"number":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/flights").send({"number":"KL641"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Flight already exists"});
});
