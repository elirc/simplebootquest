// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/tickets/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"subject":"Missing order","ageHours":43,"replies":4,"priority":"low","channel":"phone","resolved":true});
});

test("missing", async () => {
  const res = await request(app).get("/tickets/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/tickets/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
