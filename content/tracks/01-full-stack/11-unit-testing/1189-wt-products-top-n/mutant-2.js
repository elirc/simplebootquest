// mutant: off-by-one in slice
const PRODUCTS = [
  {id: 1, name: "Notebook", price: 118, stock: 20, category: "home", onSale: true},
  {id: 2, name: "Backpack", price: 57, stock: 52, category: "office", onSale: false},
  {id: 3, name: "Mouse Pad", price: 20, stock: 12, category: "office", onSale: false},
  {id: 4, name: "Coffee Mug", price: 8, stock: 9, category: "office", onSale: true},
  {id: 5, name: "Monitor Arm", price: 109, stock: 10, category: "tech", onSale: true},
  {id: 6, name: "USB Hub", price: 50, stock: 19, category: "home", onSale: true},
  {id: 7, name: "Desk Lamp", price: 118, stock: 43, category: "tech", onSale: true},
  {id: 8, name: "Headphones", price: 85, stock: 28, category: "office", onSale: true}
];

function topProductsByStock(products, n) {
  return [...products].sort((a, b) => b.stock - a.stock).slice(0, n - 1).map((x) => x.name);
}
