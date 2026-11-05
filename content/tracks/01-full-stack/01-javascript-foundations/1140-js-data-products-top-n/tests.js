const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 105, stock: 52, category: "office", onSale: true},
  {id: 2, name: "Desk Lamp", price: 40, stock: 34, category: "office", onSale: true},
  {id: 3, name: "Webcam", price: 112, stock: 17, category: "tech", onSale: true},
  {id: 4, name: "Plant Pot", price: 21, stock: 6, category: "home", onSale: false},
  {id: 5, name: "USB Hub", price: 82, stock: 60, category: "office", onSale: true},
  {id: 6, name: "Backpack", price: 14, stock: 46, category: "office", onSale: false},
  {id: 7, name: "Notebook", price: 32, stock: 3, category: "home", onSale: true},
  {id: 8, name: "Coffee Mug", price: 10, stock: 39, category: "office", onSale: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  topProductsByPrice(PRODUCTS, 1);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("with 1", () => {
  expect(topProductsByPrice(PRODUCTS, 1)).toEqual(["Webcam"]);
});

test("with 3", () => {
  expect(topProductsByPrice(PRODUCTS, 3)).toEqual(["Webcam","Pen Set","USB Hub"]);
});

test("with 0", () => {
  expect(topProductsByPrice(PRODUCTS, 0)).toEqual([]);
});
