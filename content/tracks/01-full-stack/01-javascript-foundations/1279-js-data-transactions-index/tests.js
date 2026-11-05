const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 877, day: 13, category: "food"},
  {id: 2, reference: "TX-06", amount: 554, day: 2, category: "salary"},
  {id: 3, reference: "TX-04", amount: 1187, day: 6, category: "food"},
  {id: 4, reference: "TX-07", amount: -214, day: 6, category: "rent"},
  {id: 5, reference: "TX-01", amount: 861, day: 27, category: "rent"},
  {id: 6, reference: "TX-11", amount: 931, day: 13, category: "fun"},
  {id: 7, reference: "TX-05", amount: -143, day: 25, category: "rent"},
  {id: 8, reference: "TX-08", amount: 948, day: 18, category: "salary"}
];

test("an empty list", () => {
  expect(transactionsById([])).toEqual({});
});

test("all transactions", () => {
  expect(transactionsById(TRANSACTIONS)).toEqual({"1":"TX-09","2":"TX-06","3":"TX-04","4":"TX-07","5":"TX-01","6":"TX-11","7":"TX-05","8":"TX-08"});
});
