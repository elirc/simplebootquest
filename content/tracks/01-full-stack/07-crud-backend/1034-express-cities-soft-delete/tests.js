// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/cities/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/cities");
  expect(res2.body).toEqual(["Lagos","Quito","Lima","Perth","Lisbon","Oslo","Hanoi"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/cities/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/cities/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
