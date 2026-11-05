// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/books").send({"title":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/books").send({"title":"DUNE"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Book already exists"});
});
