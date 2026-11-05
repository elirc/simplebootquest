const PRODUCTS = [
  {id: 1, name: "Webcam", price: 56, stock: 29, category: "tech", onSale: false},
  {id: 2, name: "Mouse Pad", price: 31, stock: 44, category: "tech", onSale: true},
  {id: 3, name: "Monitor Arm", price: 60, stock: 5, category: "office", onSale: true},
  {id: 4, name: "Coffee Mug", price: 16, stock: 10, category: "office", onSale: false},
  {id: 5, name: "Water Bottle", price: 26, stock: 45, category: "office", onSale: true},
  {id: 6, name: "Notebook", price: 118, stock: 40, category: "office", onSale: false},
  {id: 7, name: "Backpack", price: 72, stock: 6, category: "office", onSale: true},
  {id: 8, name: "Headphones", price: 90, stock: 35, category: "office", onSale: false}
];

test("an empty list", () => {
  expect(highestStock([])).toEqual(null);
});

test("all products", () => {
  expect(highestStock(PRODUCTS)).toEqual("Water Bottle");
});
