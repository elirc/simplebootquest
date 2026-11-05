const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 71, stock: 23, category: "home", onSale: true},
  {id: 2, name: "Monitor Arm", price: 111, stock: 22, category: "home", onSale: false},
  {id: 3, name: "Mouse Pad", price: 87, stock: 36, category: "tech", onSale: true},
  {id: 4, name: "Notebook", price: 31, stock: 25, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 32, stock: 16, category: "office", onSale: false},
  {id: 6, name: "Plant Pot", price: 58, stock: 30, category: "tech", onSale: false},
  {id: 7, name: "Coffee Mug", price: 70, stock: 38, category: "office", onSale: false},
  {id: 8, name: "Headphones", price: 69, stock: 3, category: "tech", onSale: true}
];

test("with 22", () => {
  expect(productsAbove(PRODUCTS, 22)).toEqual(["Water Bottle","Mouse Pad","Notebook","Plant Pot","Coffee Mug"]);
});

test("with 25", () => {
  expect(productsAbove(PRODUCTS, 25)).toEqual(["Mouse Pad","Plant Pot","Coffee Mug"]);
});

test("with 999999", () => {
  expect(productsAbove(PRODUCTS, 999999)).toEqual([]);
});
