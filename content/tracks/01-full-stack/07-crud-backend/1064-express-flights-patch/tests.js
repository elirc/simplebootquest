// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/flights/3").send({"durationMin":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"number":"EK3","durationMin":42,"delayMin":123,"seats":45,"airline":"oneworld"});
});

test("missing", async () => {
  const res = await request(app).patch("/flights/999").send({"durationMin":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
