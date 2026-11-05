// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/repos").send({"name":"Brand new","stars":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","stars":5});
  expect(res.headers.location).toBe("/repos/9");
});

test("missing name", async () => {
  const res = await request(app).post("/repos").send({"stars":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid repo"});
});

test("negative number", async () => {
  const res = await request(app).post("/repos").send({"name":"x","stars":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/repos").send({"name":"x","stars":"5"});
  expect(res.status).toBe(400);
});
