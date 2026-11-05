const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 88, stock: 13, category: "office", onSale: false},
  {id: 2, name: "Plant Pot", price: 27, stock: 45, category: "office", onSale: true},
  {id: 3, name: "Notebook", price: 95, stock: 37, category: "home", onSale: false},
  {id: 4, name: "Backpack", price: 90, stock: 50, category: "tech", onSale: true},
  {id: 5, name: "Mouse Pad", price: 15, stock: 2, category: "office", onSale: false},
  {id: 6, name: "Webcam", price: 73, stock: 41, category: "home", onSale: false},
  {id: 7, name: "Monitor Arm", price: 70, stock: 43, category: "tech", onSale: true},
  {id: 8, name: "Desk Lamp", price: 116, stock: 33, category: "office", onSale: true}
];

function pageOfProducts(products, page, size) {
  const totalPages = Math.ceil(products.length / size);
  const items = products.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
