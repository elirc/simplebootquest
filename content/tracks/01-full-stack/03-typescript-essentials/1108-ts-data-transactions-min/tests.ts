const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 476, day: 7, category: "food"},
  {id: 2, reference: "TX-11", amount: 70, day: 9, category: "rent"},
  {id: 3, reference: "TX-03", amount: 79, day: 20, category: "food"},
  {id: 4, reference: "TX-09", amount: -257, day: 17, category: "food"},
  {id: 5, reference: "TX-10", amount: 1077, day: 18, category: "food"},
  {id: 6, reference: "TX-04", amount: 446, day: 26, category: "travel"},
  {id: 7, reference: "TX-02", amount: 618, day: 22, category: "food"},
  {id: 8, reference: "TX-06", amount: 519, day: 11, category: "food"}
];

test("an empty list", () => {
  expect(lowestAmount([])).toEqual(null);
});

test("all transactions", () => {
  expect(lowestAmount(TRANSACTIONS)).toEqual("TX-09");
});
