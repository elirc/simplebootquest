const ORDERS = [
  {id: 1, code: "E-500", totalCents: 6272, items: 1, status: "cancelled", country: "US"},
  {id: 2, code: "C-300", totalCents: 5596, items: 3, status: "pending", country: "DE"},
  {id: 3, code: "A-101", totalCents: 9079, items: 8, status: "cancelled", country: "DE"},
  {id: 4, code: "A-100", totalCents: 7111, items: 6, status: "cancelled", country: "US"},
  {id: 5, code: "E-501", totalCents: 18987, items: 3, status: "pending", country: "DE"},
  {id: 6, code: "B-200", totalCents: 4111, items: 5, status: "pending", country: "US"},
  {id: 7, code: "C-301", totalCents: 5177, items: 8, status: "pending", country: "DE"},
  {id: 8, code: "D-400", totalCents: 9693, items: 5, status: "paid", country: "US"}
];

test("with \"-3\"", () => {
  expect(searchOrders(ORDERS, "-3")).toEqual(["C-300","C-301"]);
});

test("with \"-3\"", () => {
  expect(searchOrders(ORDERS, "-3")).toEqual(["C-300","C-301"]);
});

test("with \"  \"", () => {
  expect(searchOrders(ORDERS, "  ")).toEqual(["E-500","C-300","A-101","A-100","E-501","B-200","C-301","D-400"]);
});

test("with \"zzz\"", () => {
  expect(searchOrders(ORDERS, "zzz")).toEqual([]);
});
