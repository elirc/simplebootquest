// mutant: sorts (mutates) the input array in place
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 15754, items: 5, status: "pending", country: "DE"},
  {id: 2, code: "D-400", totalCents: 1424, items: 5, status: "cancelled", country: "UK"},
  {id: 3, code: "A-100", totalCents: 13272, items: 9, status: "paid", country: "UK"},
  {id: 4, code: "A-102", totalCents: 10449, items: 6, status: "cancelled", country: "US"},
  {id: 5, code: "C-301", totalCents: 3440, items: 5, status: "shipped", country: "US"},
  {id: 6, code: "E-500", totalCents: 11574, items: 6, status: "cancelled", country: "DE"},
  {id: 7, code: "D-401", totalCents: 2557, items: 5, status: "shipped", country: "US"},
  {id: 8, code: "E-501", totalCents: 13327, items: 2, status: "pending", country: "DE"}
];

function topOrdersByItems(orders, n) {
  return orders.sort((a, b) => b.items - a.items).slice(0, n).map((x) => x.code);
}
