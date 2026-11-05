const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 110, stock: 49, category: "office", onSale: true},
  {id: 2, name: "Monitor Arm", price: 19, stock: 59, category: "tech", onSale: true},
  {id: 3, name: "Mouse Pad", price: 93, stock: 47, category: "home", onSale: true},
  {id: 4, name: "Plant Pot", price: 100, stock: 55, category: "office", onSale: true},
  {id: 5, name: "Webcam", price: 81, stock: 12, category: "tech", onSale: true},
  {id: 6, name: "Backpack", price: 10, stock: 11, category: "office", onSale: true},
  {id: 7, name: "Coffee Mug", price: 85, stock: 53, category: "tech", onSale: true},
  {id: 8, name: "Water Bottle", price: 42, stock: 7, category: "home", onSale: false}
];

test("with 30", () => {
  expect(priceHistogram(PRODUCTS, 30)).toEqual({"0":2,"30":1,"60":2,"90":3});
});

test("with 60", () => {
  expect(priceHistogram(PRODUCTS, 60)).toEqual({"0":3,"60":5});
});
