// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("reads are public", async () => {
  const res = await request(app).get("/flights");
  expect(res.status).toBe(200);
});

test("writes need the key", async () => {
  const res = await request(app).post("/flights").send({"number":"x"});
  expect(res.status).toBe(401);
  expect(res.body).toEqual({"error":"Missing or invalid API key"});
});

test("wrong key", async () => {
  const res = await request(app).post("/flights").set("x-api-key", "nope").send({"number":"x"});
  expect(res.status).toBe(401);
});

test("right key", async () => {
  const res = await request(app).post("/flights").set("x-api-key", "letmein").send({"number":"x"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"number":"x"});
});
