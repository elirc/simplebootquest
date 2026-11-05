const ORDERS = [
  {id: 1, code: "D-401", totalCents: 5730, items: 7, status: "pending", country: "UK"},
  {id: 2, code: "E-500", totalCents: 13241, items: 8, status: "cancelled", country: "UK"},
  {id: 3, code: "C-301", totalCents: 15634, items: 3, status: "shipped", country: "DE"},
  {id: 4, code: "B-200", totalCents: 1171, items: 6, status: "pending", country: "UK"},
  {id: 5, code: "B-201", totalCents: 15295, items: 4, status: "cancelled", country: "US"},
  {id: 6, code: "E-501", totalCents: 12113, items: 3, status: "cancelled", country: "UK"},
  {id: 7, code: "A-100", totalCents: 5376, items: 7, status: "cancelled", country: "UK"},
  {id: 8, code: "D-400", totalCents: 13316, items: 2, status: "cancelled", country: "US"}
];

test("with 5730", () => {
  expect(allOrdersUnder(ORDERS, 5730)).toEqual(false);
});

test("with 15635", () => {
  expect(allOrdersUnder(ORDERS, 15635)).toEqual(true);
});

test("with 15634", () => {
  expect(allOrdersUnder(ORDERS, 15634)).toEqual(false);
});
