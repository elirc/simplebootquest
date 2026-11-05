// mutant: mutates the original objects
const ORDERS = [
  {id: 1, code: "A-101", totalCents: 23188, items: 4, status: "cancelled", country: "US"},
  {id: 2, code: "E-500", totalCents: 9313, items: 3, status: "pending", country: "UK"},
  {id: 3, code: "A-102", totalCents: 11205, items: 8, status: "shipped", country: "DE"},
  {id: 4, code: "B-200", totalCents: 4398, items: 2, status: "pending", country: "DE"},
  {id: 5, code: "C-302", totalCents: 5547, items: 7, status: "cancelled", country: "US"},
  {id: 6, code: "C-301", totalCents: 1577, items: 2, status: "paid", country: "UK"},
  {id: 7, code: "D-400", totalCents: 11543, items: 8, status: "shipped", country: "US"},
  {id: 8, code: "C-300", totalCents: 24477, items: 9, status: "paid", country: "UK"}
];

function bumpTotalCents(orders, value, amount) {
  return orders.map((x) => (x.country === value ? Object.assign(x, { totalCents: x.totalCents + amount } : x));
}
