// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/plants/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/plants");
  expect(res2.body).toEqual(["Cactus","Orchid","Peace Lily","Monstera","Lavender","Basil","Aloe"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/plants/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/plants/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
