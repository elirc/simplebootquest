// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/products").send({"name":"Brand new","price":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","price":5});
  expect(res.headers.location).toBe("/products/9");
});

test("missing name", async () => {
  const res = await request(app).post("/products").send({"price":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid product"});
});

test("negative number", async () => {
  const res = await request(app).post("/products").send({"name":"x","price":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/products").send({"name":"x","price":"5"});
  expect(res.status).toBe(400);
});
