const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 35, stock: 43, category: "office", onSale: false},
  {id: 2, name: "Pen Set", price: 37, stock: 59, category: "office", onSale: true},
  {id: 3, name: "Coffee Mug", price: 34, stock: 18, category: "office", onSale: true},
  {id: 4, name: "Plant Pot", price: 65, stock: 25, category: "tech", onSale: false},
  {id: 5, name: "Desk Lamp", price: 47, stock: 30, category: "tech", onSale: false},
  {id: 6, name: "Backpack", price: 58, stock: 57, category: "office", onSale: true},
  {id: 7, name: "Notebook", price: 48, stock: 27, category: "office", onSale: false},
  {id: 8, name: "Water Bottle", price: 115, stock: 40, category: "office", onSale: true}
];

test("an empty list", () => {
  expect(averageStockPerCategory([])).toEqual({});
});

test("all products", () => {
  expect(averageStockPerCategory(PRODUCTS)).toEqual({"office":41,"tech":28});
});
