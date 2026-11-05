// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/workouts");
  expect(res.body).toEqual({"data":["Tue swim","Mon run","Thu yoga"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/workouts?page=2&limit=2");
  expect(res.body).toEqual({"data":["Thu yoga","Tue run"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/workouts?limit=50");
  expect(res.body).toEqual({"data":["Tue swim","Mon run","Thu yoga","Tue run","Wed lift"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/workouts?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Tue swim","Mon run","Thu yoga"],"meta":{"page":1,"limit":3,"total":8}});
});
