// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/students");
  expect(res.body).toEqual({"data":["Amara","Keiko","Jonah"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/students?page=2&limit=2");
  expect(res.body).toEqual({"data":["Jonah","Bilal"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/students?limit=50");
  expect(res.body).toEqual({"data":["Amara","Keiko","Jonah","Bilal","Chen"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/students?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Amara","Keiko","Jonah"],"meta":{"page":1,"limit":3,"total":8}});
});
