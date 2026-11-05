test("with \"x-\"", () => {
  expect(searchTransactions(TRANSACTIONS, "x-")).toEqual(["TX-06","TX-10","TX-07","TX-01","TX-05","TX-02","TX-09","TX-11"]);
});

test("with \"X-\"", () => {
  expect(searchTransactions(TRANSACTIONS, "X-")).toEqual(["TX-06","TX-10","TX-07","TX-01","TX-05","TX-02","TX-09","TX-11"]);
});

test("with \"  \"", () => {
  expect(searchTransactions(TRANSACTIONS, "  ")).toEqual(["TX-06","TX-10","TX-07","TX-01","TX-05","TX-02","TX-09","TX-11"]);
});

test("with \"zzz\"", () => {
  expect(searchTransactions(TRANSACTIONS, "zzz")).toEqual([]);
});
