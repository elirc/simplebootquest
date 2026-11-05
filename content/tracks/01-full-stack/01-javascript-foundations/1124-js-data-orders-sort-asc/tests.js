const ORDERS = [
  {id: 1, code: "E-500", totalCents: 8068, items: 7, status: "shipped", country: "UK"},
  {id: 2, code: "D-400", totalCents: 15378, items: 6, status: "pending", country: "UK"},
  {id: 3, code: "C-302", totalCents: 5666, items: 2, status: "cancelled", country: "UK"},
  {id: 4, code: "B-200", totalCents: 17470, items: 2, status: "paid", country: "UK"},
  {id: 5, code: "B-201", totalCents: 24846, items: 7, status: "paid", country: "US"},
  {id: 6, code: "C-301", totalCents: 18758, items: 5, status: "shipped", country: "UK"},
  {id: 7, code: "E-501", totalCents: 23705, items: 3, status: "paid", country: "UK"},
  {id: 8, code: "A-102", totalCents: 9152, items: 8, status: "pending", country: "DE"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(ORDERS);
  ordersByItems(ORDERS);
  expect(JSON.stringify(ORDERS)).toBe(before);
});

test("all orders", () => {
  expect(ordersByItems(ORDERS)).toEqual(["C-302","B-200","E-501","C-301","D-400","E-500","B-201","A-102"]);
});
