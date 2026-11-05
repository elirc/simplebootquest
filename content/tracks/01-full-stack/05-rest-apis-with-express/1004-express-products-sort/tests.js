// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/products?sort=price&order=desc");
  expect(res.body).toEqual(["Desk Lamp","Monitor Arm","Webcam","Coffee Mug","USB Hub","Water Bottle","Backpack","Mouse Pad"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/products?sort=name");
  expect(res.body).toEqual(["Backpack","Coffee Mug","Desk Lamp","Monitor Arm","Mouse Pad","USB Hub","Water Bottle","Webcam"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/products?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
