const ORDERS = [
  {id: 1, code: "D-401", totalCents: 5311, items: 6, status: "cancelled", country: "DE"},
  {id: 2, code: "A-102", totalCents: 3017, items: 4, status: "paid", country: "UK"},
  {id: 3, code: "E-500", totalCents: 5435, items: 1, status: "cancelled", country: "UK"},
  {id: 4, code: "E-501", totalCents: 989, items: 9, status: "pending", country: "UK"},
  {id: 5, code: "B-200", totalCents: 20376, items: 9, status: "paid", country: "US"},
  {id: 6, code: "A-100", totalCents: 19318, items: 6, status: "shipped", country: "US"},
  {id: 7, code: "C-300", totalCents: 13514, items: 5, status: "pending", country: "DE"},
  {id: 8, code: "D-400", totalCents: 24385, items: 3, status: "paid", country: "US"}
];

test("an empty list", () => {
  expect(summariseOrders([])).toEqual([]);
});

test("all orders", () => {
  expect(summariseOrders(ORDERS)).toEqual([{"id":1,"code":"D-401","totalCents":5311},{"id":2,"code":"A-102","totalCents":3017},{"id":3,"code":"E-500","totalCents":5435},{"id":4,"code":"E-501","totalCents":989},{"id":5,"code":"B-200","totalCents":20376},{"id":6,"code":"A-100","totalCents":19318},{"id":7,"code":"C-300","totalCents":13514},{"id":8,"code":"D-400","totalCents":24385}]);
});
