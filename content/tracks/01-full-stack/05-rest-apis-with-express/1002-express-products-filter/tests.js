// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/products?category=office");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":1,"name":"Backpack","price":51,"stock":54,"category":"office","onSale":true},{"id":2,"name":"Desk Lamp","price":117,"stock":56,"category":"office","onSale":false},{"id":5,"name":"Webcam","price":87,"stock":23,"category":"office","onSale":true},{"id":8,"name":"Water Bottle","price":53,"stock":10,"category":"office","onSale":false}]);
});

test("no filter", async () => {
  const res = await request(app).get("/products");
  expect(res.body).toEqual([{"id":1,"name":"Backpack","price":51,"stock":54,"category":"office","onSale":true},{"id":2,"name":"Desk Lamp","price":117,"stock":56,"category":"office","onSale":false},{"id":3,"name":"Coffee Mug","price":74,"stock":3,"category":"home","onSale":true},{"id":4,"name":"Monitor Arm","price":89,"stock":33,"category":"tech","onSale":false},{"id":5,"name":"Webcam","price":87,"stock":23,"category":"office","onSale":true},{"id":6,"name":"Mouse Pad","price":23,"stock":0,"category":"home","onSale":true},{"id":7,"name":"USB Hub","price":64,"stock":47,"category":"home","onSale":true},{"id":8,"name":"Water Bottle","price":53,"stock":10,"category":"office","onSale":false}]);
});

test("no matches", async () => {
  const res = await request(app).get("/products?category=nope");
  expect(res.body).toEqual([]);
});
