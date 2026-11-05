// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/events").send({"name":"Brand new","capacity":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","capacity":5});
  expect(res.headers.location).toBe("/events/9");
});

test("missing name", async () => {
  const res = await request(app).post("/events").send({"capacity":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid event"});
});

test("negative number", async () => {
  const res = await request(app).post("/events").send({"name":"x","capacity":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/events").send({"name":"x","capacity":"5"});
  expect(res.status).toBe(400);
});
