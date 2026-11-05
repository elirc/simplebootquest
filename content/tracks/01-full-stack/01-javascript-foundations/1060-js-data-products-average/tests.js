const PRODUCTS = [
  {id: 1, name: "Backpack", price: 18, stock: 28, category: "tech", onSale: true},
  {id: 2, name: "Coffee Mug", price: 66, stock: 32, category: "office", onSale: false},
  {id: 3, name: "Webcam", price: 40, stock: 42, category: "office", onSale: true},
  {id: 4, name: "Pen Set", price: 118, stock: 5, category: "home", onSale: true},
  {id: 5, name: "Desk Lamp", price: 69, stock: 28, category: "home", onSale: true},
  {id: 6, name: "Notebook", price: 77, stock: 17, category: "tech", onSale: true},
  {id: 7, name: "Plant Pot", price: 32, stock: 9, category: "home", onSale: false},
  {id: 8, name: "Mouse Pad", price: 72, stock: 28, category: "office", onSale: true}
];

test("an empty list", () => {
  expect(averagePrice([])).toEqual(null);
});

test("all products", () => {
  expect(averagePrice(PRODUCTS)).toEqual(61.5);
});
