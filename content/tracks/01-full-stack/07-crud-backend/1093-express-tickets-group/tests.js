// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/tickets/by-channel");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"email":4,"phone":1,"chat":3});
});
