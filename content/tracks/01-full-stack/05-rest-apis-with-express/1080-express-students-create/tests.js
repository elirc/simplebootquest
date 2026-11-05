// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/students").send({"name":"Brand new","score":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","score":5});
  expect(res.headers.location).toBe("/students/9");
});

test("missing name", async () => {
  const res = await request(app).post("/students").send({"score":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid student"});
});

test("negative number", async () => {
  const res = await request(app).post("/students").send({"name":"x","score":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/students").send({"name":"x","score":"5"});
  expect(res.status).toBe(400);
});
