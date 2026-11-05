// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/cars/by-fuel");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"petrol":3,"hybrid":2,"diesel":1,"electric":2});
});
