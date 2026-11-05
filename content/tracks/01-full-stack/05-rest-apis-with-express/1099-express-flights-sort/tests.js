// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/flights?sort=durationMin&order=desc");
  expect(res.body).toEqual(["EK3","LH400","DL15","TK1","KL641","QF1","BA117","UA90"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/flights?sort=number");
  expect(res.body).toEqual(["BA117","DL15","EK3","KL641","LH400","QF1","TK1","UA90"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/flights?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
