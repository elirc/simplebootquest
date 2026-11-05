// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/products/search?q=ba");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["Backpack"]);
});

test("requires q", async () => {
  const res = await request(app).get("/products/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
