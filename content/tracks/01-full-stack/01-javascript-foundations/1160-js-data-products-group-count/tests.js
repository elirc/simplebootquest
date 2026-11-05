const PRODUCTS = [
  {id: 1, name: "USB Hub", price: 7, stock: 57, category: "home", onSale: true},
  {id: 2, name: "Coffee Mug", price: 12, stock: 59, category: "tech", onSale: false},
  {id: 3, name: "Pen Set", price: 12, stock: 0, category: "home", onSale: false},
  {id: 4, name: "Monitor Arm", price: 52, stock: 39, category: "office", onSale: false},
  {id: 5, name: "Backpack", price: 8, stock: 14, category: "tech", onSale: true},
  {id: 6, name: "Water Bottle", price: 17, stock: 16, category: "home", onSale: false},
  {id: 7, name: "Plant Pot", price: 76, stock: 55, category: "home", onSale: true},
  {id: 8, name: "Headphones", price: 70, stock: 35, category: "tech", onSale: true}
];

test("an empty list", () => {
  expect(countProductsPerCategory([])).toEqual({});
});

test("all products", () => {
  expect(countProductsPerCategory(PRODUCTS)).toEqual({"home":4,"tech":3,"office":1});
});
