// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/hotels?sort=nightlyPrice&order=desc");
  expect(res.body).toEqual(["Harbour View","Riverside Inn","Sky Garden","Station Hotel","Sea Breeze","Pine Lodge","Old Mill","Northern Star"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/hotels?sort=name");
  expect(res.body).toEqual(["Harbour View","Northern Star","Old Mill","Pine Lodge","Riverside Inn","Sea Breeze","Sky Garden","Station Hotel"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/hotels?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
