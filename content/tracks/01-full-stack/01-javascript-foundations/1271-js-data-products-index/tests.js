const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 32, stock: 6, category: "tech", onSale: true},
  {id: 2, name: "Coffee Mug", price: 66, stock: 21, category: "office", onSale: false},
  {id: 3, name: "Water Bottle", price: 78, stock: 59, category: "office", onSale: true},
  {id: 4, name: "Backpack", price: 6, stock: 50, category: "home", onSale: false},
  {id: 5, name: "Webcam", price: 90, stock: 11, category: "office", onSale: false},
  {id: 6, name: "Notebook", price: 44, stock: 34, category: "home", onSale: true},
  {id: 7, name: "Headphones", price: 37, stock: 12, category: "home", onSale: true},
  {id: 8, name: "USB Hub", price: 112, stock: 42, category: "office", onSale: false}
];

test("an empty list", () => {
  expect(productsById([])).toEqual({});
});

test("all products", () => {
  expect(productsById(PRODUCTS)).toEqual({"1":"Desk Lamp","2":"Coffee Mug","3":"Water Bottle","4":"Backpack","5":"Webcam","6":"Notebook","7":"Headphones","8":"USB Hub"});
});
