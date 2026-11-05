// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/tasks").send({"title":"Brand new","priority":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Brand new","priority":5});
  expect(res.headers.location).toBe("/tasks/9");
});

test("missing name", async () => {
  const res = await request(app).post("/tasks").send({"priority":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid task"});
});

test("negative number", async () => {
  const res = await request(app).post("/tasks").send({"title":"x","priority":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/tasks").send({"title":"x","priority":"5"});
  expect(res.status).toBe(400);
});
