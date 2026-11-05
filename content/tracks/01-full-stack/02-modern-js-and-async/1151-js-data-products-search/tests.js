const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 102, stock: 47, category: "home", onSale: false},
  {id: 2, name: "Plant Pot", price: 52, stock: 7, category: "office", onSale: true},
  {id: 3, name: "Webcam", price: 97, stock: 2, category: "tech", onSale: true},
  {id: 4, name: "Notebook", price: 23, stock: 33, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 64, stock: 22, category: "home", onSale: false},
  {id: 6, name: "USB Hub", price: 13, stock: 29, category: "office", onSale: true},
  {id: 7, name: "Headphones", price: 87, stock: 36, category: "office", onSale: true},
  {id: 8, name: "Mouse Pad", price: 34, stock: 27, category: "home", onSale: true}
];

test("with \"ou\"", () => {
  expect(searchProducts(PRODUCTS, "ou")).toEqual(["Mouse Pad"]);
});

test("with \"OU\"", () => {
  expect(searchProducts(PRODUCTS, "OU")).toEqual(["Mouse Pad"]);
});

test("with \"  \"", () => {
  expect(searchProducts(PRODUCTS, "  ")).toEqual(["Coffee Mug","Plant Pot","Webcam","Notebook","Backpack","USB Hub","Headphones","Mouse Pad"]);
});

test("with \"zzz\"", () => {
  expect(searchProducts(PRODUCTS, "zzz")).toEqual([]);
});
