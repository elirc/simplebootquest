// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/movies/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalYear":16115,"averageYear":2014});
});
