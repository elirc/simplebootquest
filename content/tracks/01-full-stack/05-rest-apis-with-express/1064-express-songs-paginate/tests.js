// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/songs");
  expect(res.body).toEqual({"data":["Velvet","Drift","Echoes"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/songs?page=2&limit=2");
  expect(res.body).toEqual({"data":["Echoes","Gravity"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/songs?limit=50");
  expect(res.body).toEqual({"data":["Velvet","Drift","Echoes","Gravity","Lanterns"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/songs?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Velvet","Drift","Echoes"],"meta":{"page":1,"limit":3,"total":8}});
});
