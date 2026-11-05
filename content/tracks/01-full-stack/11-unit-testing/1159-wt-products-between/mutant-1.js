// mutant: boundary: `>=` became `>`
const PRODUCTS = [
  {id: 1, name: "Desk Lamp", price: 109, stock: 11, category: "home", onSale: true},
  {id: 2, name: "Monitor Arm", price: 88, stock: 2, category: "home", onSale: false},
  {id: 3, name: "Mouse Pad", price: 72, stock: 50, category: "tech", onSale: true},
  {id: 4, name: "Backpack", price: 78, stock: 23, category: "office", onSale: false},
  {id: 5, name: "Notebook", price: 71, stock: 21, category: "tech", onSale: false},
  {id: 6, name: "Headphones", price: 94, stock: 8, category: "home", onSale: true},
  {id: 7, name: "Plant Pot", price: 37, stock: 14, category: "tech", onSale: false},
  {id: 8, name: "Water Bottle", price: 74, stock: 31, category: "home", onSale: true}
];

function productsInRange(products, low, high) {
  return products.filter((x) => x.price > low && x.price <= high).map((x) => x.name);
}
