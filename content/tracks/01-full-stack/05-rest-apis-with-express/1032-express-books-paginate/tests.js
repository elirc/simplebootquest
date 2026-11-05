// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/books");
  expect(res.body).toEqual({"data":["Dune","Siddhartha","Clean Code"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/books?page=2&limit=2");
  expect(res.body).toEqual({"data":["Clean Code","Kindred"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/books?limit=50");
  expect(res.body).toEqual({"data":["Dune","Siddhartha","Clean Code","Kindred","Ulysses"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/books?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Dune","Siddhartha","Clean Code"],"meta":{"page":1,"limit":3,"total":8}});
});
