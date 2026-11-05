// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("reads are public", async () => {
  const res = await request(app).get("/recipes");
  expect(res.status).toBe(200);
});

test("writes need the key", async () => {
  const res = await request(app).post("/recipes").send({"name":"x"});
  expect(res.status).toBe(401);
  expect(res.body).toEqual({"error":"Missing or invalid API key"});
});

test("wrong key", async () => {
  const res = await request(app).post("/recipes").set("x-api-key", "nope").send({"name":"x"});
  expect(res.status).toBe(401);
});

test("right key", async () => {
  const res = await request(app).post("/recipes").set("x-api-key", "letmein").send({"name":"x"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"x"});
});
