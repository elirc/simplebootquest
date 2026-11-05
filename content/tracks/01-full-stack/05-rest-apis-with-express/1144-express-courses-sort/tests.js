// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/courses?sort=lessons&order=desc");
  expect(res.body).toEqual(["Data Viz","Intro to SQL","Web Security","GraphQL","React Basics","Docker Intro","Node APIs","CSS Layouts"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/courses?sort=title");
  expect(res.body).toEqual(["CSS Layouts","Data Viz","Docker Intro","GraphQL","Intro to SQL","Node APIs","React Basics","Web Security"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/courses?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
