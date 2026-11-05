// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/movies/3").send({"year":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"title":"Cloud Atlas","year":42,"minutes":151,"rating":4.2,"genre":"thriller"});
});

test("missing", async () => {
  const res = await request(app).patch("/movies/999").send({"year":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
