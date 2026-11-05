const ORDERS = [
  {id: 1, code: "C-300", totalCents: 8581, items: 3, status: "paid", country: "UK"},
  {id: 2, code: "B-200", totalCents: 1496, items: 2, status: "cancelled", country: "UK"},
  {id: 3, code: "D-400", totalCents: 16990, items: 2, status: "paid", country: "UK"},
  {id: 4, code: "A-100", totalCents: 21516, items: 8, status: "pending", country: "DE"},
  {id: 5, code: "C-301", totalCents: 3786, items: 5, status: "pending", country: "UK"},
  {id: 6, code: "D-401", totalCents: 15473, items: 3, status: "cancelled", country: "US"},
  {id: 7, code: "A-101", totalCents: 11827, items: 4, status: "pending", country: "US"},
  {id: 8, code: "C-302", totalCents: 9986, items: 5, status: "paid", country: "UK"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(ORDERS);
  topOrdersByItems(ORDERS, 1);
  expect(JSON.stringify(ORDERS)).toBe(before);
});

test("with 1", () => {
  expect(topOrdersByItems(ORDERS, 1)).toEqual(["A-100"]);
});

test("with 3", () => {
  expect(topOrdersByItems(ORDERS, 3)).toEqual(["A-100","C-301","C-302"]);
});

test("with 0", () => {
  expect(topOrdersByItems(ORDERS, 0)).toEqual([]);
});
