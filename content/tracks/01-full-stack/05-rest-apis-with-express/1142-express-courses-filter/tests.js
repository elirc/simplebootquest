// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/courses?level=beginner");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"title":"React Basics","lessons":31,"enrolled":2912,"level":"beginner"},{"id":6,"title":"Node APIs","lessons":20,"enrolled":4192,"level":"beginner"},{"id":7,"title":"Intro to SQL","lessons":34,"enrolled":1712,"level":"beginner"}]);
});

test("no filter", async () => {
  const res = await request(app).get("/courses");
  expect(res.body).toEqual([{"id":1,"title":"Web Security","lessons":32,"enrolled":4215,"level":"intermediate"},{"id":2,"title":"React Basics","lessons":31,"enrolled":2912,"level":"beginner"},{"id":3,"title":"Docker Intro","lessons":29,"enrolled":3024,"level":"intermediate"},{"id":4,"title":"Data Viz","lessons":38,"enrolled":741,"level":"intermediate"},{"id":5,"title":"CSS Layouts","lessons":19,"enrolled":1026,"level":"intermediate"},{"id":6,"title":"Node APIs","lessons":20,"enrolled":4192,"level":"beginner"},{"id":7,"title":"Intro to SQL","lessons":34,"enrolled":1712,"level":"beginner"},{"id":8,"title":"GraphQL","lessons":32,"enrolled":2068,"level":"advanced"}]);
});

test("no matches", async () => {
  const res = await request(app).get("/courses?level=nope");
  expect(res.body).toEqual([]);
});
