// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/books?sort=pages&order=desc");
  expect(res.body).toEqual(["Ulysses","Neuromancer","Rebecca","Clean Code","Siddhartha","Kindred","Hamlet","Dune"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/books?sort=title");
  expect(res.body).toEqual(["Clean Code","Dune","Hamlet","Kindred","Neuromancer","Rebecca","Siddhartha","Ulysses"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/books?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
