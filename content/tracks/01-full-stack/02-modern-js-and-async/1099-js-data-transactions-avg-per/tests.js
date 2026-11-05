const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 1106, day: 15, category: "fun"},
  {id: 2, reference: "TX-12", amount: 469, day: 15, category: "rent"},
  {id: 3, reference: "TX-10", amount: 119, day: 23, category: "rent"},
  {id: 4, reference: "TX-07", amount: -106, day: 21, category: "food"},
  {id: 5, reference: "TX-05", amount: -151, day: 25, category: "rent"},
  {id: 6, reference: "TX-04", amount: 1082, day: 4, category: "travel"},
  {id: 7, reference: "TX-02", amount: 877, day: 6, category: "food"},
  {id: 8, reference: "TX-08", amount: 768, day: 13, category: "fun"}
];

test("an empty list", () => {
  expect(averageDayPerCategory([])).toEqual({});
});

test("all transactions", () => {
  expect(averageDayPerCategory(TRANSACTIONS)).toEqual({"fun":14,"rent":21,"food":14,"travel":4});
});
