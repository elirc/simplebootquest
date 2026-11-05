// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("reads are public", async () => {
  const res = await request(app).get("/transactions");
  expect(res.status).toBe(200);
});

test("writes need the key", async () => {
  const res = await request(app).post("/transactions").send({"reference":"x"});
  expect(res.status).toBe(401);
  expect(res.body).toEqual({"error":"Missing or invalid API key"});
});

test("wrong key", async () => {
  const res = await request(app).post("/transactions").set("x-api-key", "nope").send({"reference":"x"});
  expect(res.status).toBe(401);
});

test("right key", async () => {
  const res = await request(app).post("/transactions").set("x-api-key", "letmein").send({"reference":"x"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"reference":"x"});
});
