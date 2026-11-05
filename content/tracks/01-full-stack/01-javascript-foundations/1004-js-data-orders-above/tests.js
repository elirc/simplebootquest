const ORDERS = [
  {id: 1, code: "C-300", totalCents: 23417, items: 4, status: "shipped", country: "US"},
  {id: 2, code: "B-200", totalCents: 23542, items: 8, status: "shipped", country: "DE"},
  {id: 3, code: "A-100", totalCents: 24096, items: 8, status: "pending", country: "DE"},
  {id: 4, code: "C-302", totalCents: 15295, items: 9, status: "pending", country: "UK"},
  {id: 5, code: "D-400", totalCents: 8543, items: 8, status: "shipped", country: "DE"},
  {id: 6, code: "D-401", totalCents: 9076, items: 1, status: "paid", country: "UK"},
  {id: 7, code: "E-501", totalCents: 15508, items: 3, status: "cancelled", country: "US"},
  {id: 8, code: "A-102", totalCents: 924, items: 3, status: "shipped", country: "UK"}
];

test("with 3", () => {
  expect(ordersAbove(ORDERS, 3)).toEqual(["C-300","B-200","A-100","C-302","D-400"]);
});

test("with 8", () => {
  expect(ordersAbove(ORDERS, 8)).toEqual(["C-302"]);
});

test("with 999999", () => {
  expect(ordersAbove(ORDERS, 999999)).toEqual([]);
});
