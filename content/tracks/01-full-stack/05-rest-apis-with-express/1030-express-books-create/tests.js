// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = books.map((x) => ({ ...x }));
  return () => { books.length = 0; books.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/books").send({"title":"Brand new","pages":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Brand new","pages":5});
  expect(res.headers.location).toBe("/books/9");
});

test("missing name", async () => {
  const res = await request(app).post("/books").send({"pages":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid book"});
});

test("negative number", async () => {
  const res = await request(app).post("/books").send({"title":"x","pages":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/books").send({"title":"x","pages":"5"});
  expect(res.status).toBe(400);
});
