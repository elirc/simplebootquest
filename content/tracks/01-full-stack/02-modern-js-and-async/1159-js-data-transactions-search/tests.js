const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: 232, day: 15, category: "food"},
  {id: 2, reference: "TX-05", amount: -175, day: 12, category: "fun"},
  {id: 3, reference: "TX-09", amount: -323, day: 5, category: "travel"},
  {id: 4, reference: "TX-02", amount: 1129, day: 5, category: "travel"},
  {id: 5, reference: "TX-10", amount: 507, day: 2, category: "fun"},
  {id: 6, reference: "TX-04", amount: 97, day: 4, category: "rent"},
  {id: 7, reference: "TX-07", amount: 604, day: 9, category: "food"},
  {id: 8, reference: "TX-08", amount: -113, day: 5, category: "rent"}
];

test("with \"x-\"", () => {
  expect(searchTransactions(TRANSACTIONS, "x-")).toEqual(["TX-11","TX-05","TX-09","TX-02","TX-10","TX-04","TX-07","TX-08"]);
});

test("with \"X-\"", () => {
  expect(searchTransactions(TRANSACTIONS, "X-")).toEqual(["TX-11","TX-05","TX-09","TX-02","TX-10","TX-04","TX-07","TX-08"]);
});

test("with \"  \"", () => {
  expect(searchTransactions(TRANSACTIONS, "  ")).toEqual(["TX-11","TX-05","TX-09","TX-02","TX-10","TX-04","TX-07","TX-08"]);
});

test("with \"zzz\"", () => {
  expect(searchTransactions(TRANSACTIONS, "zzz")).toEqual([]);
});
