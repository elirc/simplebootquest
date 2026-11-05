const PRODUCTS = [
  {id: 1, name: "Webcam", price: 53, stock: 55, category: "tech", onSale: true},
  {id: 2, name: "Notebook", price: 19, stock: 42, category: "home", onSale: false},
  {id: 3, name: "Backpack", price: 30, stock: 37, category: "office", onSale: false},
  {id: 4, name: "Headphones", price: 54, stock: 44, category: "tech", onSale: true},
  {id: 5, name: "Coffee Mug", price: 65, stock: 53, category: "home", onSale: false},
  {id: 6, name: "Mouse Pad", price: 46, stock: 34, category: "tech", onSale: true},
  {id: 7, name: "Monitor Arm", price: 34, stock: 37, category: "office", onSale: true},
  {id: 8, name: "Plant Pot", price: 102, stock: 41, category: "office", onSale: true}
];

test("with 34", () => {
  expect(allProductsUnder(PRODUCTS, 34)).toEqual(false);
});

test("with 103", () => {
  expect(allProductsUnder(PRODUCTS, 103)).toEqual(true);
});

test("with 102", () => {
  expect(allProductsUnder(PRODUCTS, 102)).toEqual(false);
});
