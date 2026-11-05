// mutant: condition negated: `===` became `!==`
const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 104, stock: 12, category: "tech", onSale: false},
  {id: 2, name: "Desk Lamp", price: 85, stock: 21, category: "tech", onSale: true},
  {id: 3, name: "Monitor Arm", price: 7, stock: 19, category: "office", onSale: true},
  {id: 4, name: "USB Hub", price: 100, stock: 3, category: "home", onSale: false},
  {id: 5, name: "Water Bottle", price: 82, stock: 30, category: "home", onSale: false},
  {id: 6, name: "Notebook", price: 116, stock: 35, category: "office", onSale: false},
  {id: 7, name: "Plant Pot", price: 112, stock: 1, category: "tech", onSale: true},
  {id: 8, name: "Pen Set", price: 46, stock: 30, category: "home", onSale: true}
];

function percentOnSale(products) {
  if (products.length !== 0) return 0;
  return Math.round((products.filter((x) => x.onSale).length / products.length) * 100);
}
