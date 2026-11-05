// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/tasks");
  expect(res.body).toEqual({"data":["Refactor auth","Add search","Design schema"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/tasks?page=2&limit=2");
  expect(res.body).toEqual({"data":["Design schema","Fix CSS"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/tasks?limit=50");
  expect(res.body).toEqual({"data":["Refactor auth","Add search","Design schema","Fix CSS","Deploy API"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/tasks?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Refactor auth","Add search","Design schema"],"meta":{"page":1,"limit":3,"total":8}});
});
