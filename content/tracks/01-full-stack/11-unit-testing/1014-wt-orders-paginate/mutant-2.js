// mutant: `Math.ceil` became `Math.floor`
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 12498, items: 4, status: "shipped", country: "US"},
  {id: 2, code: "E-501", totalCents: 2570, items: 4, status: "paid", country: "US"},
  {id: 3, code: "B-201", totalCents: 9951, items: 7, status: "cancelled", country: "US"},
  {id: 4, code: "A-100", totalCents: 20247, items: 3, status: "cancelled", country: "US"},
  {id: 5, code: "B-200", totalCents: 6602, items: 5, status: "cancelled", country: "UK"},
  {id: 6, code: "E-500", totalCents: 12525, items: 6, status: "paid", country: "UK"},
  {id: 7, code: "C-302", totalCents: 9701, items: 8, status: "shipped", country: "DE"},
  {id: 8, code: "D-401", totalCents: 8819, items: 6, status: "shipped", country: "US"}
];

function pageOfOrders(orders, page, size) {
  const totalPages = Math.floor(orders.length / size);
  const items = orders.slice((page - 1) * size, page * size).map((x) => x.code);
  return { items, page, totalPages };
}
