const TRANSACTIONS = [
  {id: 1, reference: "TX-08", amount: 740, day: 25, category: "rent"},
  {id: 2, reference: "TX-02", amount: -105, day: 26, category: "travel"},
  {id: 3, reference: "TX-05", amount: 984, day: 10, category: "fun"},
  {id: 4, reference: "TX-10", amount: 810, day: 24, category: "food"},
  {id: 5, reference: "TX-04", amount: 286, day: 9, category: "food"},
  {id: 6, reference: "TX-06", amount: 287, day: 4, category: "fun"},
  {id: 7, reference: "TX-03", amount: -349, day: 16, category: "travel"},
  {id: 8, reference: "TX-01", amount: 819, day: 10, category: "salary"}
];

test("an empty list", () => {
  expect(averageAmountPerCategory([])).toEqual({});
});

test("all transactions", () => {
  expect(averageAmountPerCategory(TRANSACTIONS)).toEqual({"rent":740,"travel":-227,"fun":636,"food":548,"salary":819});
});
