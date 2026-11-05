test("with 1, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 1, 3)).toEqual({"items":["TX-06","TX-08","TX-05"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 2, 3)).toEqual({"items":["TX-11","TX-01","TX-09"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 3, 3)).toEqual({"items":["TX-02","TX-03"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
