// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = songs.map((x) => ({ ...x }));
  return () => { songs.length = 0; songs.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/songs?sort=seconds&order=desc");
  expect(res.body).toEqual(["Riverside","Paper Planes","Sunrise","Lanterns","Velvet","Echoes","Gravity","Drift"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/songs?sort=title");
  expect(res.body).toEqual(["Drift","Echoes","Gravity","Lanterns","Paper Planes","Riverside","Sunrise","Velvet"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/songs?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
