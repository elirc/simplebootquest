test('does not mutate the input', () => {
  const before = JSON.stringify(ORDERS);
  ordersByItems(ORDERS);
  expect(JSON.stringify(ORDERS)).toBe(before);
});

test("all orders", () => {
  expect(ordersByItems(ORDERS)).toEqual(["D-401","C-301","C-300","A-102","C-302","A-101","B-201","E-501"]);
});
