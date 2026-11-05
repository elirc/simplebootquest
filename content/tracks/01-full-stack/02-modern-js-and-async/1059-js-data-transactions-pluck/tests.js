const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 741, day: 1, category: "travel"},
  {id: 2, reference: "TX-06", amount: 82, day: 16, category: "food"},
  {id: 3, reference: "TX-02", amount: 242, day: 7, category: "fun"},
  {id: 4, reference: "TX-09", amount: -387, day: 16, category: "fun"},
  {id: 5, reference: "TX-07", amount: 43, day: 27, category: "food"},
  {id: 6, reference: "TX-12", amount: 1031, day: 20, category: "salary"},
  {id: 7, reference: "TX-01", amount: -270, day: 11, category: "fun"},
  {id: 8, reference: "TX-04", amount: 119, day: 2, category: "food"}
];

test("an empty list", () => {
  expect(summariseTransactions([])).toEqual([]);
});

test("all transactions", () => {
  expect(summariseTransactions(TRANSACTIONS)).toEqual([{"id":1,"reference":"TX-05","day":1},{"id":2,"reference":"TX-06","day":16},{"id":3,"reference":"TX-02","day":7},{"id":4,"reference":"TX-09","day":16},{"id":5,"reference":"TX-07","day":27},{"id":6,"reference":"TX-12","day":20},{"id":7,"reference":"TX-01","day":11},{"id":8,"reference":"TX-04","day":2}]);
});
