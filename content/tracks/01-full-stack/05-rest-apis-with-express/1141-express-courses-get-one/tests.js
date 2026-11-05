// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/courses/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"title":"React Basics","lessons":31,"enrolled":2912,"level":"beginner"});
});

test("missing", async () => {
  const res = await request(app).get("/courses/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/courses/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
