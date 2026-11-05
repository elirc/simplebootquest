test("with 5097, 9490", () => {
  expect(ordersInRange(ORDERS, 5097, 9490)).toEqual(["C-300","B-201","E-500"]);
});

test("with 9490, 11135", () => {
  expect(ordersInRange(ORDERS, 9490, 11135)).toEqual(["C-300","D-400"]);
});

test("with 5097, 5097", () => {
  expect(ordersInRange(ORDERS, 5097, 5097)).toEqual(["E-500"]);
});
