test("with -84, 93", () => {
  expect(transactionsInRange(TRANSACTIONS, -84, 93)).toEqual(["TX-12","TX-10","TX-08"]);
});

test("with 93, 515", () => {
  expect(transactionsInRange(TRANSACTIONS, 93, 515)).toEqual(["TX-08","TX-11"]);
});

test("with -84, -84", () => {
  expect(transactionsInRange(TRANSACTIONS, -84, -84)).toEqual(["TX-12"]);
});
