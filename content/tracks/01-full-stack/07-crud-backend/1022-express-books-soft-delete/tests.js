// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/books/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/books");
  expect(res2.body).toEqual(["Dune","Clean Code","Kindred","Ulysses","Rebecca","Neuromancer","Hamlet"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/books/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/books/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
