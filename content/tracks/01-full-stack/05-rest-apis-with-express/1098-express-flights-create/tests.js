// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/flights").send({"number":"Brand new","durationMin":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"number":"Brand new","durationMin":5});
  expect(res.headers.location).toBe("/flights/9");
});

test("missing name", async () => {
  const res = await request(app).post("/flights").send({"durationMin":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid flight"});
});

test("negative number", async () => {
  const res = await request(app).post("/flights").send({"number":"x","durationMin":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/flights").send({"number":"x","durationMin":"5"});
  expect(res.status).toBe(400);
});
