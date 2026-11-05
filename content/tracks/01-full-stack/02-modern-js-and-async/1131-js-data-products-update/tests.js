const PRODUCTS = [
  {id: 1, name: "Monitor Arm", price: 66, stock: 57, category: "tech", onSale: true},
  {id: 2, name: "Pen Set", price: 67, stock: 38, category: "tech", onSale: true},
  {id: 3, name: "Coffee Mug", price: 72, stock: 47, category: "home", onSale: true},
  {id: 4, name: "Plant Pot", price: 35, stock: 39, category: "tech", onSale: true},
  {id: 5, name: "USB Hub", price: 57, stock: 27, category: "home", onSale: false},
  {id: 6, name: "Backpack", price: 25, stock: 20, category: "office", onSale: true},
  {id: 7, name: "Headphones", price: 30, stock: 13, category: "office", onSale: true},
  {id: 8, name: "Water Bottle", price: 25, stock: 49, category: "home", onSale: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  bumpStock(PRODUCTS, "office", 10);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("with \"office\", 10", () => {
  expect(bumpStock(PRODUCTS, "office", 10)).toEqual([{"id":1,"name":"Monitor Arm","price":66,"stock":57,"category":"tech","onSale":true},{"id":2,"name":"Pen Set","price":67,"stock":38,"category":"tech","onSale":true},{"id":3,"name":"Coffee Mug","price":72,"stock":47,"category":"home","onSale":true},{"id":4,"name":"Plant Pot","price":35,"stock":39,"category":"tech","onSale":true},{"id":5,"name":"USB Hub","price":57,"stock":27,"category":"home","onSale":false},{"id":6,"name":"Backpack","price":25,"stock":30,"category":"office","onSale":true},{"id":7,"name":"Headphones","price":30,"stock":23,"category":"office","onSale":true},{"id":8,"name":"Water Bottle","price":25,"stock":49,"category":"home","onSale":true}]);
});

test("with \"tech\", 1", () => {
  expect(bumpStock(PRODUCTS, "tech", 1)).toEqual([{"id":1,"name":"Monitor Arm","price":66,"stock":58,"category":"tech","onSale":true},{"id":2,"name":"Pen Set","price":67,"stock":39,"category":"tech","onSale":true},{"id":3,"name":"Coffee Mug","price":72,"stock":47,"category":"home","onSale":true},{"id":4,"name":"Plant Pot","price":35,"stock":40,"category":"tech","onSale":true},{"id":5,"name":"USB Hub","price":57,"stock":27,"category":"home","onSale":false},{"id":6,"name":"Backpack","price":25,"stock":20,"category":"office","onSale":true},{"id":7,"name":"Headphones","price":30,"stock":13,"category":"office","onSale":true},{"id":8,"name":"Water Bottle","price":25,"stock":49,"category":"home","onSale":true}]);
});
