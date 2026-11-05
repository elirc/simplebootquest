const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 26, stock: 50, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 36, stock: 42, category: "office", onSale: true},
  {id: 3, name: "Coffee Mug", price: 58, stock: 27, category: "home", onSale: false},
  {id: 4, name: "Webcam", price: 102, stock: 40, category: "office", onSale: true},
  {id: 5, name: "Plant Pot", price: 75, stock: 29, category: "tech", onSale: false},
  {id: 6, name: "Monitor Arm", price: 19, stock: 8, category: "office", onSale: true},
  {id: 7, name: "Headphones", price: 72, stock: 53, category: "office", onSale: false},
  {id: 8, name: "Mouse Pad", price: 89, stock: 20, category: "home", onSale: false}
];

test("an empty list", () => {
  expect(percentOnSale([])).toEqual(0);
});

test("all products", () => {
  expect(percentOnSale(PRODUCTS)).toEqual(38);
});
