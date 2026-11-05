// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/courses");
  expect(res.body).toEqual({"data":["Web Security","React Basics","Docker Intro"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/courses?page=2&limit=2");
  expect(res.body).toEqual({"data":["Docker Intro","Data Viz"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/courses?limit=50");
  expect(res.body).toEqual({"data":["Web Security","React Basics","Docker Intro","Data Viz","CSS Layouts"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/courses?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Web Security","React Basics","Docker Intro"],"meta":{"page":1,"limit":3,"total":8}});
});
