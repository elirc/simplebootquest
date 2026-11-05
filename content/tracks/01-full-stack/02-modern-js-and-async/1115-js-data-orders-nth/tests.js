const ORDERS = [
  {id: 1, code: "C-302", totalCents: 10691, items: 7, status: "shipped", country: "US"},
  {id: 2, code: "E-500", totalCents: 10175, items: 6, status: "pending", country: "DE"},
  {id: 3, code: "A-102", totalCents: 12306, items: 7, status: "paid", country: "UK"},
  {id: 4, code: "C-300", totalCents: 21809, items: 5, status: "cancelled", country: "UK"},
  {id: 5, code: "C-301", totalCents: 6403, items: 6, status: "pending", country: "DE"},
  {id: 6, code: "A-101", totalCents: 24346, items: 1, status: "paid", country: "UK"},
  {id: 7, code: "D-401", totalCents: 6882, items: 4, status: "shipped", country: "DE"},
  {id: 8, code: "B-201", totalCents: 2883, items: 9, status: "paid", country: "US"}
];

test("with 1", () => {
  expect(nthByItems(ORDERS, 1)).toEqual("B-201");
});

test("with 2", () => {
  expect(nthByItems(ORDERS, 2)).toEqual("C-302");
});

test("with 5", () => {
  expect(nthByItems(ORDERS, 5)).toEqual("C-301");
});

test("with 0", () => {
  expect(nthByItems(ORDERS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByItems(ORDERS, 99)).toEqual(null);
});
