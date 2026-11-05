const ORDERS = [
  {id: 1, code: "D-400", totalCents: 16561, items: 2, status: "paid", country: "UK"},
  {id: 2, code: "A-100", totalCents: 17613, items: 3, status: "shipped", country: "US"},
  {id: 3, code: "C-301", totalCents: 7644, items: 7, status: "shipped", country: "DE"},
  {id: 4, code: "E-500", totalCents: 24843, items: 6, status: "cancelled", country: "DE"},
  {id: 5, code: "D-401", totalCents: 564, items: 6, status: "paid", country: "DE"},
  {id: 6, code: "E-501", totalCents: 13142, items: 5, status: "paid", country: "US"},
  {id: 7, code: "A-102", totalCents: 2450, items: 8, status: "paid", country: "US"},
  {id: 8, code: "A-101", totalCents: 21879, items: 5, status: "shipped", country: "UK"}
];

test("with 1", () => {
  expect(nthByItems(ORDERS, 1)).toEqual("A-102");
});

test("with 2", () => {
  expect(nthByItems(ORDERS, 2)).toEqual("C-301");
});

test("with 5", () => {
  expect(nthByItems(ORDERS, 5)).toEqual("E-501");
});

test("with 0", () => {
  expect(nthByItems(ORDERS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByItems(ORDERS, 99)).toEqual(null);
});
