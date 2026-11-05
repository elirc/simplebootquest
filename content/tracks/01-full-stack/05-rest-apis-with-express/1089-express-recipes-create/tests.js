// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = recipes.map((x) => ({ ...x }));
  return () => { recipes.length = 0; recipes.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/recipes").send({"name":"Brand new","minutes":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","minutes":5});
  expect(res.headers.location).toBe("/recipes/9");
});

test("missing name", async () => {
  const res = await request(app).post("/recipes").send({"minutes":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid recipe"});
});

test("negative number", async () => {
  const res = await request(app).post("/recipes").send({"name":"x","minutes":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/recipes").send({"name":"x","minutes":"5"});
  expect(res.status).toBe(400);
});
