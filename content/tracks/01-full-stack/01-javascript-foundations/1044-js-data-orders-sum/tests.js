const ORDERS = [
  {id: 1, code: "D-400", totalCents: 18667, items: 4, status: "paid", country: "US"},
  {id: 2, code: "C-302", totalCents: 5360, items: 1, status: "cancelled", country: "UK"},
  {id: 3, code: "C-300", totalCents: 8547, items: 7, status: "paid", country: "US"},
  {id: 4, code: "A-100", totalCents: 17156, items: 2, status: "pending", country: "US"},
  {id: 5, code: "B-200", totalCents: 12372, items: 8, status: "cancelled", country: "DE"},
  {id: 6, code: "C-301", totalCents: 3405, items: 9, status: "shipped", country: "UK"},
  {id: 7, code: "A-101", totalCents: 12144, items: 6, status: "pending", country: "US"},
  {id: 8, code: "E-500", totalCents: 19940, items: 9, status: "paid", country: "US"}
];

test("an empty list", () => {
  expect(totalItems([])).toEqual(0);
});

test("all orders", () => {
  expect(totalItems(ORDERS)).toEqual(46);
});
