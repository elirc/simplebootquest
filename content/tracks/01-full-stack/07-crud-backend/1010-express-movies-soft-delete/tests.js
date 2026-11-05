// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/movies/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/movies");
  expect(res2.body).toEqual(["Glass City","Cloud Atlas","Iron Garden","Silver Fox","Open Road","Red Harbor","Quiet Storm"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/movies/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/movies/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
