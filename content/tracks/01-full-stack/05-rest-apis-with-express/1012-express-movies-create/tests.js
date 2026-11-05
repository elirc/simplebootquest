// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = movies.map((x) => ({ ...x }));
  return () => { movies.length = 0; movies.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/movies").send({"title":"Brand new","minutes":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Brand new","minutes":5});
  expect(res.headers.location).toBe("/movies/9");
});

test("missing name", async () => {
  const res = await request(app).post("/movies").send({"minutes":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid movie"});
});

test("negative number", async () => {
  const res = await request(app).post("/movies").send({"title":"x","minutes":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/movies").send({"title":"x","minutes":"5"});
  expect(res.status).toBe(400);
});
