const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: -163, day: 27, category: "food"},
  {id: 2, reference: "TX-02", amount: 270, day: 17, category: "salary"},
  {id: 3, reference: "TX-03", amount: 1115, day: 4, category: "travel"},
  {id: 4, reference: "TX-05", amount: 1075, day: 16, category: "fun"},
  {id: 5, reference: "TX-09", amount: 922, day: 27, category: "food"},
  {id: 6, reference: "TX-11", amount: 1130, day: 21, category: "fun"},
  {id: 7, reference: "TX-06", amount: 708, day: 16, category: "rent"},
  {id: 8, reference: "TX-08", amount: 712, day: 4, category: "fun"}
];

test("with 16, 17", () => {
  expect(transactionsInRange(TRANSACTIONS, 16, 17)).toEqual(["TX-02","TX-05","TX-06"]);
});

test("with 17, 21", () => {
  expect(transactionsInRange(TRANSACTIONS, 17, 21)).toEqual(["TX-02","TX-11"]);
});

test("with 16, 16", () => {
  expect(transactionsInRange(TRANSACTIONS, 16, 16)).toEqual(["TX-05","TX-06"]);
});
