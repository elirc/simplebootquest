// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/tickets/search?q=bu");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["Bug in export"]);
});

test("requires q", async () => {
  const res = await request(app).get("/tickets/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
