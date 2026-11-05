const ORDERS = [
  {id: 1, code: "A-100", totalCents: 19663, items: 8, status: "shipped", country: "DE"},
  {id: 2, code: "C-301", totalCents: 20032, items: 9, status: "paid", country: "US"},
  {id: 3, code: "A-102", totalCents: 669, items: 2, status: "shipped", country: "US"},
  {id: 4, code: "A-101", totalCents: 5979, items: 8, status: "shipped", country: "UK"},
  {id: 5, code: "D-401", totalCents: 12030, items: 7, status: "paid", country: "UK"},
  {id: 6, code: "D-400", totalCents: 787, items: 3, status: "paid", country: "US"},
  {id: 7, code: "C-302", totalCents: 3846, items: 3, status: "paid", country: "UK"},
  {id: 8, code: "C-300", totalCents: 1066, items: 9, status: "shipped", country: "US"}
];

test("with 1066, 5979", () => {
  expect(ordersInRange(ORDERS, 1066, 5979)).toEqual(["A-101","C-302","C-300"]);
});

test("with 5979, 12030", () => {
  expect(ordersInRange(ORDERS, 5979, 12030)).toEqual(["A-101","D-401"]);
});

test("with 1066, 1066", () => {
  expect(ordersInRange(ORDERS, 1066, 1066)).toEqual(["C-300"]);
});
