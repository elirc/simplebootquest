const PRODUCTS = [
  {id: 1, name: "Notebook", price: 80, stock: 10, category: "office", onSale: true},
  {id: 2, name: "Backpack", price: 23, stock: 20, category: "office", onSale: false},
  {id: 3, name: "USB Hub", price: 74, stock: 9, category: "tech", onSale: true},
  {id: 4, name: "Coffee Mug", price: 4, stock: 6, category: "office", onSale: true},
  {id: 5, name: "Water Bottle", price: 104, stock: 1, category: "tech", onSale: true},
  {id: 6, name: "Desk Lamp", price: 50, stock: 30, category: "home", onSale: true},
  {id: 7, name: "Pen Set", price: 105, stock: 12, category: "tech", onSale: true},
  {id: 8, name: "Webcam", price: 104, stock: 12, category: "office", onSale: true}
];

test("an empty list", () => {
  expect(lowestStock([])).toEqual(null);
});

test("all products", () => {
  expect(lowestStock(PRODUCTS)).toEqual("Water Bottle");
});
