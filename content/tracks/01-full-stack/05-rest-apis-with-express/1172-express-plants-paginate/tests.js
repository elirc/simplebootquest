// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/plants");
  expect(res.body).toEqual({"data":["Cactus","Fern","Orchid"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/plants?page=2&limit=2");
  expect(res.body).toEqual({"data":["Orchid","Peace Lily"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/plants?limit=50");
  expect(res.body).toEqual({"data":["Cactus","Fern","Orchid","Peace Lily","Monstera"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/plants?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Cactus","Fern","Orchid"],"meta":{"page":1,"limit":3,"total":8}});
});
