const ORDERS = [
  {id: 1, code: "B-200", totalCents: 23874, items: 2, status: "shipped", country: "DE"},
  {id: 2, code: "D-400", totalCents: 10105, items: 6, status: "pending", country: "UK"},
  {id: 3, code: "E-500", totalCents: 9706, items: 9, status: "cancelled", country: "UK"},
  {id: 4, code: "E-501", totalCents: 12665, items: 3, status: "cancelled", country: "UK"},
  {id: 5, code: "C-301", totalCents: 11062, items: 2, status: "shipped", country: "UK"},
  {id: 6, code: "C-300", totalCents: 1905, items: 8, status: "shipped", country: "US"},
  {id: 7, code: "B-201", totalCents: 22962, items: 3, status: "paid", country: "US"},
  {id: 8, code: "A-102", totalCents: 22827, items: 5, status: "pending", country: "US"}
];

function nthByItems(orders, n) {
  const sorted = [...orders].sort((a, b) => b.items - a.items);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].code : null;
}
