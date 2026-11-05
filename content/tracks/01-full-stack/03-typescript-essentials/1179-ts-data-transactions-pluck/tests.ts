const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: 1050, day: 7, category: "food"},
  {id: 2, reference: "TX-03", amount: 533, day: 20, category: "rent"},
  {id: 3, reference: "TX-12", amount: 563, day: 18, category: "rent"},
  {id: 4, reference: "TX-04", amount: 481, day: 17, category: "travel"},
  {id: 5, reference: "TX-02", amount: 986, day: 19, category: "fun"},
  {id: 6, reference: "TX-01", amount: 1118, day: 5, category: "fun"},
  {id: 7, reference: "TX-09", amount: -140, day: 5, category: "fun"},
  {id: 8, reference: "TX-07", amount: 672, day: 4, category: "travel"}
];

test("an empty list", () => {
  expect(summariseTransactions([])).toEqual([]);
});

test("all transactions", () => {
  expect(summariseTransactions(TRANSACTIONS)).toEqual([{"id":1,"reference":"TX-11","day":7},{"id":2,"reference":"TX-03","day":20},{"id":3,"reference":"TX-12","day":18},{"id":4,"reference":"TX-04","day":17},{"id":5,"reference":"TX-02","day":19},{"id":6,"reference":"TX-01","day":5},{"id":7,"reference":"TX-09","day":5},{"id":8,"reference":"TX-07","day":4}]);
});
