// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/products/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"name":"Desk Lamp","price":117,"stock":56,"category":"office","onSale":false});
});

test("missing", async () => {
  const res = await request(app).get("/products/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/products/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
