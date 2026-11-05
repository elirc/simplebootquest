// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/courses/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/courses");
  expect(res2.body).toEqual(["Web Security","Docker Intro","Data Viz","CSS Layouts","Node APIs","Intro to SQL","GraphQL"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/courses/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/courses/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
