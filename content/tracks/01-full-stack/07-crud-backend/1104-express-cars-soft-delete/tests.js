// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/cars/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/cars");
  expect(res2.body).toEqual(["Polo","Model 3","Golf","Leaf","Mustang","Civic","Fiesta"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/cars/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/cars/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
