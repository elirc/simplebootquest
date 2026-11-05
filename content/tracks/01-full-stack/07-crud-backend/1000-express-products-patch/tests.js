// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/products/3").send({"stock":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Coffee Mug","price":74,"stock":42,"category":"home","onSale":true});
});

test("missing", async () => {
  const res = await request(app).patch("/products/999").send({"stock":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
