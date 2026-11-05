// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/movies");
  expect(res.body).toEqual({"data":["Glass City","Paper Moon","Cloud Atlas"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/movies?page=2&limit=2");
  expect(res.body).toEqual({"data":["Cloud Atlas","Iron Garden"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/movies?limit=50");
  expect(res.body).toEqual({"data":["Glass City","Paper Moon","Cloud Atlas","Iron Garden","Silver Fox"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/movies?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Glass City","Paper Moon","Cloud Atlas"],"meta":{"page":1,"limit":3,"total":8}});
});
