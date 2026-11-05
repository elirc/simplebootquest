const ORDERS = [
  {id: 1, code: "C-302", totalCents: 6285, items: 4, status: "paid", country: "US"},
  {id: 2, code: "B-200", totalCents: 15734, items: 8, status: "paid", country: "DE"},
  {id: 3, code: "A-101", totalCents: 21031, items: 5, status: "cancelled", country: "UK"},
  {id: 4, code: "E-501", totalCents: 10288, items: 8, status: "paid", country: "DE"},
  {id: 5, code: "D-401", totalCents: 7388, items: 8, status: "pending", country: "UK"},
  {id: 6, code: "A-102", totalCents: 17662, items: 7, status: "cancelled", country: "UK"},
  {id: 7, code: "A-100", totalCents: 10671, items: 6, status: "pending", country: "UK"},
  {id: 8, code: "B-201", totalCents: 15240, items: 3, status: "paid", country: "DE"}
];

test("with 10288, 15240", () => {
  expect(ordersInRange(ORDERS, 10288, 15240)).toEqual(["E-501","A-100","B-201"]);
});

test("with 15240, 15734", () => {
  expect(ordersInRange(ORDERS, 15240, 15734)).toEqual(["B-200","B-201"]);
});

test("with 10288, 10288", () => {
  expect(ordersInRange(ORDERS, 10288, 10288)).toEqual(["E-501"]);
});
