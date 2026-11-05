test("with 1", () => {
  expect(nthByItems(ORDERS, 1)).toEqual("E-500");
});

test("with 2", () => {
  expect(nthByItems(ORDERS, 2)).toEqual("C-300");
});

test("with 5", () => {
  expect(nthByItems(ORDERS, 5)).toEqual("E-501");
});

test("with 0", () => {
  expect(nthByItems(ORDERS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByItems(ORDERS, 99)).toEqual(null);
});
