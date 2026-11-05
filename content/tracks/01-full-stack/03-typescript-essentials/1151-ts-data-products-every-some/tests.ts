const PRODUCTS = [
  {id: 1, name: "Plant Pot", price: 92, stock: 22, category: "office", onSale: false},
  {id: 2, name: "USB Hub", price: 89, stock: 54, category: "office", onSale: false},
  {id: 3, name: "Backpack", price: 31, stock: 37, category: "office", onSale: true},
  {id: 4, name: "Headphones", price: 85, stock: 20, category: "office", onSale: true},
  {id: 5, name: "Webcam", price: 44, stock: 24, category: "home", onSale: true},
  {id: 6, name: "Coffee Mug", price: 60, stock: 51, category: "office", onSale: true},
  {id: 7, name: "Desk Lamp", price: 41, stock: 55, category: "home", onSale: true},
  {id: 8, name: "Water Bottle", price: 57, stock: 16, category: "office", onSale: false}
];

test("with 44", () => {
  expect(allProductsUnder(PRODUCTS, 44)).toEqual(false);
});

test("with 93", () => {
  expect(allProductsUnder(PRODUCTS, 93)).toEqual(true);
});

test("with 92", () => {
  expect(allProductsUnder(PRODUCTS, 92)).toEqual(false);
});
