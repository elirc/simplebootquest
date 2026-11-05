const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 17, stock: 52, category: "home", onSale: true},
  {id: 2, name: "Mouse Pad", price: 43, stock: 14, category: "office", onSale: false},
  {id: 3, name: "Plant Pot", price: 77, stock: 59, category: "tech", onSale: false},
  {id: 4, name: "Headphones", price: 37, stock: 13, category: "tech", onSale: false},
  {id: 5, name: "USB Hub", price: 109, stock: 21, category: "tech", onSale: true},
  {id: 6, name: "Pen Set", price: 14, stock: 27, category: "home", onSale: false},
  {id: 7, name: "Monitor Arm", price: 36, stock: 10, category: "tech", onSale: true},
  {id: 8, name: "Notebook", price: 118, stock: 51, category: "home", onSale: true}
];

test("an empty list", () => {
  expect(summariseProducts([])).toEqual([]);
});

test("all products", () => {
  expect(summariseProducts(PRODUCTS)).toEqual([{"id":1,"name":"Desk Lamp","price":17},{"id":2,"name":"Mouse Pad","price":43},{"id":3,"name":"Plant Pot","price":77},{"id":4,"name":"Headphones","price":37},{"id":5,"name":"USB Hub","price":109},{"id":6,"name":"Pen Set","price":14},{"id":7,"name":"Monitor Arm","price":36},{"id":8,"name":"Notebook","price":118}]);
});
