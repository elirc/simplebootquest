test('does not mutate the input', () => {
  const before = JSON.stringify(ORDERS);
  topOrdersByItems(ORDERS, 1);
  expect(JSON.stringify(ORDERS)).toBe(before);
});

test("with 1", () => {
  expect(topOrdersByItems(ORDERS, 1)).toEqual(["A-100"]);
});

test("with 3", () => {
  expect(topOrdersByItems(ORDERS, 3)).toEqual(["A-100","A-102","E-500"]);
});

test("with 0", () => {
  expect(topOrdersByItems(ORDERS, 0)).toEqual([]);
});
