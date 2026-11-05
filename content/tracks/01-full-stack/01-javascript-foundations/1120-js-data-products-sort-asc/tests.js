const PRODUCTS = [
  {id: 1, name: "USB Hub", price: 78, stock: 11, category: "tech", onSale: true},
  {id: 2, name: "Headphones", price: 95, stock: 28, category: "tech", onSale: true},
  {id: 3, name: "Notebook", price: 13, stock: 51, category: "home", onSale: true},
  {id: 4, name: "Coffee Mug", price: 115, stock: 43, category: "tech", onSale: true},
  {id: 5, name: "Desk Lamp", price: 16, stock: 6, category: "tech", onSale: false},
  {id: 6, name: "Backpack", price: 109, stock: 56, category: "home", onSale: false},
  {id: 7, name: "Webcam", price: 82, stock: 12, category: "office", onSale: true},
  {id: 8, name: "Pen Set", price: 73, stock: 46, category: "tech", onSale: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  productsByPrice(PRODUCTS);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("all products", () => {
  expect(productsByPrice(PRODUCTS)).toEqual(["Notebook","Desk Lamp","Pen Set","USB Hub","Webcam","Headphones","Backpack","Coffee Mug"]);
});
