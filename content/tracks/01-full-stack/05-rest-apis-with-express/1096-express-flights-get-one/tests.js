// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/flights/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"number":"TK1","durationMin":607,"delayMin":173,"seats":16,"airline":"oneworld"});
});

test("missing", async () => {
  const res = await request(app).get("/flights/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/flights/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
