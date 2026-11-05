// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/cities");
  expect(res.body).toEqual({"data":["Lagos","Seoul","Quito"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/cities?page=2&limit=2");
  expect(res.body).toEqual({"data":["Quito","Lima"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/cities?limit=50");
  expect(res.body).toEqual({"data":["Lagos","Seoul","Quito","Lima","Perth"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/cities?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Lagos","Seoul","Quito"],"meta":{"page":1,"limit":3,"total":8}});
});
