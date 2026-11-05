const TRANSACTIONS = [
  {id: 1, reference: "TX-08", amount: -262, day: 21, category: "rent"},
  {id: 2, reference: "TX-04", amount: -244, day: 4, category: "rent"},
  {id: 3, reference: "TX-12", amount: -296, day: 13, category: "food"},
  {id: 4, reference: "TX-06", amount: 379, day: 1, category: "food"},
  {id: 5, reference: "TX-07", amount: 746, day: 11, category: "rent"},
  {id: 6, reference: "TX-10", amount: 10, day: 2, category: "food"},
  {id: 7, reference: "TX-05", amount: 1052, day: 9, category: "rent"},
  {id: 8, reference: "TX-11", amount: 1125, day: 17, category: "travel"}
];

test("with 1, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 1, 3)).toEqual({"items":["TX-08","TX-04","TX-12"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 2, 3)).toEqual({"items":["TX-06","TX-07","TX-10"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 3, 3)).toEqual({"items":["TX-05","TX-11"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfTransactions(TRANSACTIONS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
