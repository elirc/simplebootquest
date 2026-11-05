const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -71, day: 15, category: "fun"},
  {id: 2, reference: "TX-10", amount: -280, day: 18, category: "salary"},
  {id: 3, reference: "TX-07", amount: -353, day: 23, category: "food"},
  {id: 4, reference: "TX-03", amount: 1001, day: 9, category: "salary"},
  {id: 5, reference: "TX-11", amount: 464, day: 10, category: "rent"},
  {id: 6, reference: "TX-01", amount: 614, day: 19, category: "rent"},
  {id: 7, reference: "TX-08", amount: -270, day: 9, category: "travel"},
  {id: 8, reference: "TX-12", amount: 1190, day: 21, category: "food"}
];

test("an empty list", () => {
  expect(highestAmount([])).toEqual(null);
});

test("all transactions", () => {
  expect(highestAmount(TRANSACTIONS)).toEqual("TX-12");
});
