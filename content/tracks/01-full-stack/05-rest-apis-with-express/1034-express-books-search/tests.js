// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/books/search?q=du");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["Dune"]);
});

test("requires q", async () => {
  const res = await request(app).get("/books/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
