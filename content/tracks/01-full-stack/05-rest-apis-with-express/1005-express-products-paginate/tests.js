// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/products");
  expect(res.body).toEqual({"data":["Backpack","Desk Lamp","Coffee Mug"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/products?page=2&limit=2");
  expect(res.body).toEqual({"data":["Coffee Mug","Monitor Arm"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/products?limit=50");
  expect(res.body).toEqual({"data":["Backpack","Desk Lamp","Coffee Mug","Monitor Arm","Webcam"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/products?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["Backpack","Desk Lamp","Coffee Mug"],"meta":{"page":1,"limit":3,"total":8}});
});
