test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  bumpStock(PRODUCTS, "office", 10);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("with \"office\", 10", () => {
  expect(bumpStock(PRODUCTS, "office", 10)).toEqual([{"id":1,"name":"Desk Lamp","price":31,"stock":57,"category":"tech","onSale":true},{"id":2,"name":"Notebook","price":4,"stock":22,"category":"home","onSale":false},{"id":3,"name":"Headphones","price":15,"stock":1,"category":"tech","onSale":true},{"id":4,"name":"Water Bottle","price":6,"stock":41,"category":"office","onSale":true},{"id":5,"name":"Monitor Arm","price":23,"stock":53,"category":"office","onSale":false},{"id":6,"name":"Coffee Mug","price":106,"stock":53,"category":"home","onSale":false},{"id":7,"name":"Mouse Pad","price":6,"stock":17,"category":"office","onSale":false},{"id":8,"name":"Pen Set","price":70,"stock":15,"category":"home","onSale":false}]);
});

test("with \"tech\", 1", () => {
  expect(bumpStock(PRODUCTS, "tech", 1)).toEqual([{"id":1,"name":"Desk Lamp","price":31,"stock":58,"category":"tech","onSale":true},{"id":2,"name":"Notebook","price":4,"stock":22,"category":"home","onSale":false},{"id":3,"name":"Headphones","price":15,"stock":2,"category":"tech","onSale":true},{"id":4,"name":"Water Bottle","price":6,"stock":31,"category":"office","onSale":true},{"id":5,"name":"Monitor Arm","price":23,"stock":43,"category":"office","onSale":false},{"id":6,"name":"Coffee Mug","price":106,"stock":53,"category":"home","onSale":false},{"id":7,"name":"Mouse Pad","price":6,"stock":7,"category":"office","onSale":false},{"id":8,"name":"Pen Set","price":70,"stock":15,"category":"home","onSale":false}]);
});
