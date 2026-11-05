// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/tickets?sort=replies&order=desc");
  expect(res.body).toEqual(["Dark mode","Bug in export","Wrong invoice","App crash","Refund request","Missing order","Password reset","Billing error"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/tickets?sort=subject");
  expect(res.body).toEqual(["App crash","Billing error","Bug in export","Dark mode","Missing order","Password reset","Refund request","Wrong invoice"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/tickets?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
