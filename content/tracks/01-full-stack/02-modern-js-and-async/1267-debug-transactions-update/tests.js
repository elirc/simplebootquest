const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 602, day: 27, category: "fun"},
  {id: 2, reference: "TX-12", amount: -177, day: 6, category: "rent"},
  {id: 3, reference: "TX-10", amount: 234, day: 25, category: "travel"},
  {id: 4, reference: "TX-04", amount: -44, day: 8, category: "salary"},
  {id: 5, reference: "TX-03", amount: -99, day: 20, category: "fun"},
  {id: 6, reference: "TX-02", amount: -18, day: 23, category: "rent"},
  {id: 7, reference: "TX-07", amount: -249, day: 7, category: "salary"},
  {id: 8, reference: "TX-08", amount: 515, day: 23, category: "fun"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  bumpDay(TRANSACTIONS, "food", 10);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("with \"food\", 10", () => {
  expect(bumpDay(TRANSACTIONS, "food", 10)).toEqual([{"id":1,"reference":"TX-05","amount":602,"day":27,"category":"fun"},{"id":2,"reference":"TX-12","amount":-177,"day":6,"category":"rent"},{"id":3,"reference":"TX-10","amount":234,"day":25,"category":"travel"},{"id":4,"reference":"TX-04","amount":-44,"day":8,"category":"salary"},{"id":5,"reference":"TX-03","amount":-99,"day":20,"category":"fun"},{"id":6,"reference":"TX-02","amount":-18,"day":23,"category":"rent"},{"id":7,"reference":"TX-07","amount":-249,"day":7,"category":"salary"},{"id":8,"reference":"TX-08","amount":515,"day":23,"category":"fun"}]);
});

test("with \"rent\", 1", () => {
  expect(bumpDay(TRANSACTIONS, "rent", 1)).toEqual([{"id":1,"reference":"TX-05","amount":602,"day":27,"category":"fun"},{"id":2,"reference":"TX-12","amount":-177,"day":7,"category":"rent"},{"id":3,"reference":"TX-10","amount":234,"day":25,"category":"travel"},{"id":4,"reference":"TX-04","amount":-44,"day":8,"category":"salary"},{"id":5,"reference":"TX-03","amount":-99,"day":20,"category":"fun"},{"id":6,"reference":"TX-02","amount":-18,"day":24,"category":"rent"},{"id":7,"reference":"TX-07","amount":-249,"day":7,"category":"salary"},{"id":8,"reference":"TX-08","amount":515,"day":23,"category":"fun"}]);
});
