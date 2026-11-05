// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("reads are public", async () => {
  const res = await request(app).get("/cities");
  expect(res.status).toBe(200);
});

test("writes need the key", async () => {
  const res = await request(app).post("/cities").send({"name":"x"});
  expect(res.status).toBe(401);
  expect(res.body).toEqual({"error":"Missing or invalid API key"});
});

test("wrong key", async () => {
  const res = await request(app).post("/cities").set("x-api-key", "nope").send({"name":"x"});
  expect(res.status).toBe(401);
});

test("right key", async () => {
  const res = await request(app).post("/cities").set("x-api-key", "letmein").send({"name":"x"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"x"});
});
