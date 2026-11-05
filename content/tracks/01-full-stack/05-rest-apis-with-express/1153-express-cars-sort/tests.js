// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/cars?sort=km&order=desc");
  expect(res.body).toEqual(["Polo","Golf","Fiesta","Model 3","Civic","Leaf","Mustang","Mazda3"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/cars?sort=model");
  expect(res.body).toEqual(["Civic","Fiesta","Golf","Leaf","Mazda3","Model 3","Mustang","Polo"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/cars?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
