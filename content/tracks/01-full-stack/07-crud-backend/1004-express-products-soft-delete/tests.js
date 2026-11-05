// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/products/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/products");
  expect(res2.body).toEqual(["Backpack","Coffee Mug","Monitor Arm","Webcam","Mouse Pad","USB Hub","Water Bottle"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/products/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/products/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
