const ORDERS = [
  {id: 1, code: "E-500", totalCents: 18751, items: 2, status: "shipped", country: "DE"},
  {id: 2, code: "D-400", totalCents: 13497, items: 5, status: "paid", country: "US"},
  {id: 3, code: "A-101", totalCents: 17880, items: 6, status: "pending", country: "DE"},
  {id: 4, code: "E-501", totalCents: 24159, items: 9, status: "shipped", country: "UK"},
  {id: 5, code: "A-102", totalCents: 15917, items: 5, status: "paid", country: "UK"},
  {id: 6, code: "A-100", totalCents: 8844, items: 5, status: "cancelled", country: "UK"},
  {id: 7, code: "C-301", totalCents: 19018, items: 8, status: "shipped", country: "UK"},
  {id: 8, code: "C-302", totalCents: 13830, items: 1, status: "cancelled", country: "UK"}
];

test("with 13830", () => {
  expect(ordersAbove(ORDERS, 13830)).toEqual(["E-500","A-101","E-501","A-102","C-301"]);
});

test("with 17880", () => {
  expect(ordersAbove(ORDERS, 17880)).toEqual(["E-500","E-501","C-301"]);
});

test("with 999999", () => {
  expect(ordersAbove(ORDERS, 999999)).toEqual([]);
});
