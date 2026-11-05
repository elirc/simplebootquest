const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 37, stock: 10, category: "home", onSale: false},
  {id: 2, name: "Headphones", price: 68, stock: 40, category: "tech", onSale: false},
  {id: 3, name: "Mouse Pad", price: 93, stock: 3, category: "office", onSale: false},
  {id: 4, name: "Monitor Arm", price: 97, stock: 24, category: "home", onSale: true},
  {id: 5, name: "Notebook", price: 58, stock: 45, category: "tech", onSale: false},
  {id: 6, name: "Pen Set", price: 79, stock: 5, category: "home", onSale: true},
  {id: 7, name: "USB Hub", price: 16, stock: 26, category: "home", onSale: true},
  {id: 8, name: "Webcam", price: 61, stock: 34, category: "home", onSale: true}
];

test("an empty list", () => {
  expect(summariseProducts([])).toEqual([]);
});

test("all products", () => {
  expect(summariseProducts(PRODUCTS)).toEqual([{"id":1,"name":"Water Bottle","stock":10},{"id":2,"name":"Headphones","stock":40},{"id":3,"name":"Mouse Pad","stock":3},{"id":4,"name":"Monitor Arm","stock":24},{"id":5,"name":"Notebook","stock":45},{"id":6,"name":"Pen Set","stock":5},{"id":7,"name":"USB Hub","stock":26},{"id":8,"name":"Webcam","stock":34}]);
});
