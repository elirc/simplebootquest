const PRODUCTS = [
  {id: 1, name: "Notebook", price: 70, stock: 3, category: "tech", onSale: true},
  {id: 2, name: "Desk Lamp", price: 37, stock: 9, category: "tech", onSale: true},
  {id: 3, name: "USB Hub", price: 30, stock: 17, category: "tech", onSale: false},
  {id: 4, name: "Webcam", price: 15, stock: 50, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 28, stock: 34, category: "tech", onSale: true},
  {id: 6, name: "Coffee Mug", price: 21, stock: 52, category: "office", onSale: true},
  {id: 7, name: "Monitor Arm", price: 36, stock: 4, category: "office", onSale: false},
  {id: 8, name: "Plant Pot", price: 101, stock: 23, category: "office", onSale: true}
];

test("with 1, 3", () => {
  expect(pageOfProducts(PRODUCTS, 1, 3)).toEqual({"items":["Notebook","Desk Lamp","USB Hub"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfProducts(PRODUCTS, 2, 3)).toEqual({"items":["Webcam","Backpack","Coffee Mug"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfProducts(PRODUCTS, 3, 3)).toEqual({"items":["Monitor Arm","Plant Pot"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfProducts(PRODUCTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
