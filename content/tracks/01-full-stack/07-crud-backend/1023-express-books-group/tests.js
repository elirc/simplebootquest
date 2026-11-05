// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/books/by-genre");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"classic":4,"tech":2,"fiction":2});
});
