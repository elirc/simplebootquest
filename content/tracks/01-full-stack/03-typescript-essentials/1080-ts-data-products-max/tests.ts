const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 102, stock: 12, category: "home", onSale: false},
  {id: 2, name: "Monitor Arm", price: 118, stock: 14, category: "home", onSale: false},
  {id: 3, name: "Notebook", price: 48, stock: 11, category: "home", onSale: false},
  {id: 4, name: "Pen Set", price: 51, stock: 51, category: "office", onSale: false},
  {id: 5, name: "Desk Lamp", price: 27, stock: 26, category: "office", onSale: true},
  {id: 6, name: "Headphones", price: 112, stock: 7, category: "home", onSale: false},
  {id: 7, name: "Webcam", price: 44, stock: 29, category: "tech", onSale: true},
  {id: 8, name: "Mouse Pad", price: 39, stock: 51, category: "office", onSale: false}
];

test("an empty list", () => {
  expect(highestPrice([])).toEqual(null);
});

test("all products", () => {
  expect(highestPrice(PRODUCTS)).toEqual("Monitor Arm");
});
