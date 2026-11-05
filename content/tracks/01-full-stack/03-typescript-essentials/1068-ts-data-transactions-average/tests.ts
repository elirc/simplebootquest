const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -165, day: 21, category: "fun"},
  {id: 2, reference: "TX-10", amount: 428, day: 27, category: "food"},
  {id: 3, reference: "TX-02", amount: 446, day: 21, category: "travel"},
  {id: 4, reference: "TX-08", amount: -157, day: 4, category: "travel"},
  {id: 5, reference: "TX-03", amount: -78, day: 28, category: "travel"},
  {id: 6, reference: "TX-12", amount: -63, day: 3, category: "food"},
  {id: 7, reference: "TX-06", amount: 686, day: 15, category: "fun"},
  {id: 8, reference: "TX-04", amount: -383, day: 18, category: "salary"}
];

test("an empty list", () => {
  expect(averageDay([])).toEqual(null);
});

test("all transactions", () => {
  expect(averageDay(TRANSACTIONS)).toEqual(17.1);
});
