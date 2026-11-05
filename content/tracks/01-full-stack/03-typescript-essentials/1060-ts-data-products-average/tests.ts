const PRODUCTS = [
  {id: 1, name: "Plant Pot", price: 91, stock: 12, category: "office", onSale: true},
  {id: 2, name: "Water Bottle", price: 71, stock: 48, category: "office", onSale: true},
  {id: 3, name: "Backpack", price: 119, stock: 57, category: "office", onSale: true},
  {id: 4, name: "Notebook", price: 35, stock: 11, category: "office", onSale: true},
  {id: 5, name: "Headphones", price: 52, stock: 58, category: "office", onSale: false},
  {id: 6, name: "Mouse Pad", price: 91, stock: 32, category: "office", onSale: false},
  {id: 7, name: "Monitor Arm", price: 93, stock: 51, category: "home", onSale: false},
  {id: 8, name: "Coffee Mug", price: 77, stock: 47, category: "tech", onSale: false}
];

test("an empty list", () => {
  expect(averageStock([])).toEqual(null);
});

test("all products", () => {
  expect(averageStock(PRODUCTS)).toEqual(39.5);
});
