// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/events?sort=capacity&order=desc");
  expect(res.body).toEqual(["Book Club","Code Dojo","Demo Day","AI Panel","Workshop","Design Jam","Hackathon","Startup Night"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/events?sort=name");
  expect(res.body).toEqual(["AI Panel","Book Club","Code Dojo","Demo Day","Design Jam","Hackathon","Startup Night","Workshop"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/events?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
