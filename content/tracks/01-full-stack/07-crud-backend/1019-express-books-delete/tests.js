// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("deletes, then 404s", async () => {
  const res = await request(app).delete("/books/1");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/books/1");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});

test("missing", async () => {
  const res = await request(app).delete("/books/999");
  expect(res.status).toBe(404);
});
