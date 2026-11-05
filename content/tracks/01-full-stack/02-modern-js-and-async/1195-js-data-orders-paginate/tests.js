const ORDERS = [
  {id: 1, code: "A-101", totalCents: 19833, items: 1, status: "shipped", country: "US"},
  {id: 2, code: "A-102", totalCents: 19189, items: 7, status: "paid", country: "US"},
  {id: 3, code: "E-501", totalCents: 19068, items: 5, status: "paid", country: "UK"},
  {id: 4, code: "C-300", totalCents: 5060, items: 6, status: "pending", country: "US"},
  {id: 5, code: "C-301", totalCents: 790, items: 8, status: "shipped", country: "DE"},
  {id: 6, code: "C-302", totalCents: 10681, items: 6, status: "paid", country: "DE"},
  {id: 7, code: "B-200", totalCents: 2720, items: 8, status: "cancelled", country: "DE"},
  {id: 8, code: "B-201", totalCents: 7268, items: 6, status: "paid", country: "UK"}
];

test("with 1, 3", () => {
  expect(pageOfOrders(ORDERS, 1, 3)).toEqual({"items":["A-101","A-102","E-501"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfOrders(ORDERS, 2, 3)).toEqual({"items":["C-300","C-301","C-302"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfOrders(ORDERS, 3, 3)).toEqual({"items":["B-200","B-201"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfOrders(ORDERS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
