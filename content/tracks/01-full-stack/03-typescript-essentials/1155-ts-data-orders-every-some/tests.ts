const ORDERS = [
  {id: 1, code: "C-300", totalCents: 11916, items: 2, status: "pending", country: "UK"},
  {id: 2, code: "C-302", totalCents: 15816, items: 2, status: "shipped", country: "DE"},
  {id: 3, code: "C-301", totalCents: 5093, items: 9, status: "shipped", country: "DE"},
  {id: 4, code: "E-500", totalCents: 6991, items: 2, status: "cancelled", country: "UK"},
  {id: 5, code: "A-102", totalCents: 5425, items: 3, status: "shipped", country: "DE"},
  {id: 6, code: "D-400", totalCents: 3632, items: 8, status: "pending", country: "UK"},
  {id: 7, code: "A-100", totalCents: 19483, items: 2, status: "cancelled", country: "UK"},
  {id: 8, code: "D-401", totalCents: 14852, items: 1, status: "pending", country: "DE"}
];

test("with 2", () => {
  expect(allOrdersUnder(ORDERS, 2)).toEqual(false);
});

test("with 10", () => {
  expect(allOrdersUnder(ORDERS, 10)).toEqual(true);
});

test("with 9", () => {
  expect(allOrdersUnder(ORDERS, 9)).toEqual(false);
});
