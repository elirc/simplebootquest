// mutant: sort direction reversed
const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 27, stock: 41, category: "office", onSale: false},
  {id: 2, name: "Notebook", price: 39, stock: 49, category: "tech", onSale: false},
  {id: 3, name: "USB Hub", price: 73, stock: 18, category: "tech", onSale: false},
  {id: 4, name: "Coffee Mug", price: 117, stock: 7, category: "tech", onSale: false},
  {id: 5, name: "Monitor Arm", price: 91, stock: 7, category: "office", onSale: true},
  {id: 6, name: "Backpack", price: 72, stock: 58, category: "office", onSale: false},
  {id: 7, name: "Plant Pot", price: 58, stock: 44, category: "home", onSale: false},
  {id: 8, name: "Webcam", price: 56, stock: 29, category: "office", onSale: true}
];

function productsInCategoryRanked(products, value) {
  return products
    .filter((x) => x.category === value)
    .sort((a, b) => a.price - b.price)
    .map((x) => x.name);
}
