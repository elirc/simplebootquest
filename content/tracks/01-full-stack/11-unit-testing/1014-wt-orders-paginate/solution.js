test("with 1, 3", () => {
  expect(pageOfOrders(ORDERS, 1, 3)).toEqual({"items":["C-300","E-501","B-201"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfOrders(ORDERS, 2, 3)).toEqual({"items":["A-100","B-200","E-500"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfOrders(ORDERS, 3, 3)).toEqual({"items":["C-302","D-401"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfOrders(ORDERS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
