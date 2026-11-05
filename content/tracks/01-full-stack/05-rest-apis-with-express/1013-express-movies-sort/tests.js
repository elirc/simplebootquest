// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/movies?sort=minutes&order=desc");
  expect(res.body).toEqual(["Silver Fox","Cloud Atlas","Red Harbor","Glass City","Paper Moon","Iron Garden","Open Road","Quiet Storm"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/movies?sort=title");
  expect(res.body).toEqual(["Cloud Atlas","Glass City","Iron Garden","Open Road","Paper Moon","Quiet Storm","Red Harbor","Silver Fox"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/movies?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
