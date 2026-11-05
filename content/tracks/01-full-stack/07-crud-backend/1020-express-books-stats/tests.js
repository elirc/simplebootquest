// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/books/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalPages":4017,"averagePages":502});
});
