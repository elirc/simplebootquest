// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/plants?sort=waterEveryDays&order=desc");
  expect(res.body).toEqual(["Aloe","Monstera","Basil","Cactus","Lavender","Orchid","Peace Lily","Fern"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/plants?sort=name");
  expect(res.body).toEqual(["Aloe","Basil","Cactus","Fern","Lavender","Monstera","Orchid","Peace Lily"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/plants?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
