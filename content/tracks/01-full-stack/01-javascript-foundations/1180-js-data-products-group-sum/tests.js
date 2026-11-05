const PRODUCTS = [
  {id: 1, name: "Backpack", price: 72, stock: 44, category: "home", onSale: true},
  {id: 2, name: "Webcam", price: 42, stock: 8, category: "tech", onSale: false},
  {id: 3, name: "USB Hub", price: 48, stock: 3, category: "home", onSale: true},
  {id: 4, name: "Water Bottle", price: 10, stock: 4, category: "office", onSale: true},
  {id: 5, name: "Headphones", price: 81, stock: 48, category: "tech", onSale: true},
  {id: 6, name: "Plant Pot", price: 47, stock: 4, category: "office", onSale: false},
  {id: 7, name: "Pen Set", price: 17, stock: 28, category: "office", onSale: false},
  {id: 8, name: "Mouse Pad", price: 7, stock: 21, category: "office", onSale: false}
];

test("an empty list", () => {
  expect(pricePerCategory([])).toEqual({});
});

test("all products", () => {
  expect(pricePerCategory(PRODUCTS)).toEqual({"home":120,"tech":123,"office":81});
});
