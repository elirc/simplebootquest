// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/movies/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"title":"Paper Moon","year":2016,"minutes":107,"rating":4.8,"genre":"drama"});
});

test("missing", async () => {
  const res = await request(app).get("/movies/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/movies/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
