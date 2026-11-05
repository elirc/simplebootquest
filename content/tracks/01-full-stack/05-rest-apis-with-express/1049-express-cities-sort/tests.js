// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/cities?sort=population&order=desc");
  expect(res.body).toEqual(["Lisbon","Oslo","Quito","Lagos","Lima","Perth","Hanoi","Seoul"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/cities?sort=name");
  expect(res.body).toEqual(["Hanoi","Lagos","Lima","Lisbon","Oslo","Perth","Quito","Seoul"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/cities?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
