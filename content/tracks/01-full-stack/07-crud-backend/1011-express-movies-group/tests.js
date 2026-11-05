// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/movies/by-genre");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"thriller":4,"drama":2,"comedy":1,"sci-fi":1});
});
