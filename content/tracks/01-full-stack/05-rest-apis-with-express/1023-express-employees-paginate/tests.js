// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/employees");
  expect(res.body).toEqual({"data":["Tim","Margaret","Katherine"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/employees?page=2&limit=2");
  expect(res.body).toEqual({"data":["Katherine","Frances"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/employees?limit=50");
  expect(res.body).toEqual({"data":["Tim","Margaret","Katherine","Frances","Ken"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/employees?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Tim","Margaret","Katherine"],"meta":{"page":1,"limit":3,"total":8}});
});
