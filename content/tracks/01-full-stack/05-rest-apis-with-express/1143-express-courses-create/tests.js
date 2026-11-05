// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/courses").send({"title":"Brand new","lessons":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Brand new","lessons":5});
  expect(res.headers.location).toBe("/courses/9");
});

test("missing name", async () => {
  const res = await request(app).post("/courses").send({"lessons":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid course"});
});

test("negative number", async () => {
  const res = await request(app).post("/courses").send({"title":"x","lessons":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/courses").send({"title":"x","lessons":"5"});
  expect(res.status).toBe(400);
});
