// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/tickets/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/tickets");
  expect(res2.body).toEqual(["Bug in export","Password reset","App crash","Refund request","Wrong invoice","Dark mode","Billing error"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/tickets/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/tickets/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
