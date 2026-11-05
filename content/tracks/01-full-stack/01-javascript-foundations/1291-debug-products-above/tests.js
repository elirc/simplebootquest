const PRODUCTS = [
  {id: 1, name: "Backpack", price: 52, stock: 53, category: "tech", onSale: true},
  {id: 2, name: "Plant Pot", price: 43, stock: 26, category: "home", onSale: false},
  {id: 3, name: "Coffee Mug", price: 19, stock: 8, category: "office", onSale: false},
  {id: 4, name: "Headphones", price: 50, stock: 29, category: "tech", onSale: true},
  {id: 5, name: "Water Bottle", price: 99, stock: 45, category: "tech", onSale: true},
  {id: 6, name: "Notebook", price: 61, stock: 47, category: "office", onSale: false},
  {id: 7, name: "Pen Set", price: 33, stock: 44, category: "office", onSale: false},
  {id: 8, name: "Desk Lamp", price: 109, stock: 38, category: "office", onSale: false}
];

test("with 43", () => {
  expect(productsAbove(PRODUCTS, 43)).toEqual(["Backpack","Headphones","Water Bottle","Notebook","Desk Lamp"]);
});

test("with 52", () => {
  expect(productsAbove(PRODUCTS, 52)).toEqual(["Water Bottle","Notebook","Desk Lamp"]);
});

test("with 999999", () => {
  expect(productsAbove(PRODUCTS, 999999)).toEqual([]);
});
