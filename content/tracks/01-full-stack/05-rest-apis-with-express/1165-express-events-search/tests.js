// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/events/search?q=ai");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["AI Panel"]);
});

test("requires q", async () => {
  const res = await request(app).get("/events/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
