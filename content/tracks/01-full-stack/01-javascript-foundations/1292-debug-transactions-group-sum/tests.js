const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 276, day: 23, category: "fun"},
  {id: 2, reference: "TX-03", amount: -239, day: 16, category: "food"},
  {id: 3, reference: "TX-12", amount: 1066, day: 1, category: "food"},
  {id: 4, reference: "TX-10", amount: -329, day: 6, category: "food"},
  {id: 5, reference: "TX-11", amount: -45, day: 1, category: "travel"},
  {id: 6, reference: "TX-04", amount: -124, day: 21, category: "salary"},
  {id: 7, reference: "TX-02", amount: 524, day: 16, category: "rent"},
  {id: 8, reference: "TX-07", amount: 643, day: 7, category: "rent"}
];

test("an empty list", () => {
  expect(dayPerCategory([])).toEqual({});
});

test("all transactions", () => {
  expect(dayPerCategory(TRANSACTIONS)).toEqual({"fun":23,"food":23,"travel":1,"salary":21,"rent":23});
});
