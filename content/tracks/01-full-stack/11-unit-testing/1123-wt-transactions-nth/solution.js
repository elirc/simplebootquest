test("with 1", () => {
  expect(nthByAmount(TRANSACTIONS, 1)).toEqual("TX-04");
});

test("with 2", () => {
  expect(nthByAmount(TRANSACTIONS, 2)).toEqual("TX-08");
});

test("with 5", () => {
  expect(nthByAmount(TRANSACTIONS, 5)).toEqual("TX-01");
});

test("with 0", () => {
  expect(nthByAmount(TRANSACTIONS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAmount(TRANSACTIONS, 99)).toEqual(null);
});
