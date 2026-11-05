// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/tickets");
  expect(res.body).toEqual({"data":["Bug in export","Missing order","Password reset"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/tickets?page=2&limit=2");
  expect(res.body).toEqual({"data":["Password reset","App crash"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/tickets?limit=50");
  expect(res.body).toEqual({"data":["Bug in export","Missing order","Password reset","App crash","Refund request"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/tickets?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Bug in export","Missing order","Password reset"],"meta":{"page":1,"limit":3,"total":8}});
});
