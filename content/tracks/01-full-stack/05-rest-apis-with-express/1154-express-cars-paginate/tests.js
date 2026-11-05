// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/cars");
  expect(res.body).toEqual({"data":["Polo","Mazda3","Model 3"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/cars?page=2&limit=2");
  expect(res.body).toEqual({"data":["Model 3","Golf"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/cars?limit=50");
  expect(res.body).toEqual({"data":["Polo","Mazda3","Model 3","Golf","Leaf"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/cars?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Polo","Mazda3","Model 3"],"meta":{"page":1,"limit":3,"total":8}});
});
