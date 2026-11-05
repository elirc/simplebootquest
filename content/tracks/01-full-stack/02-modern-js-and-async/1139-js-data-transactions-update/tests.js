const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 672, day: 27, category: "salary"},
  {id: 2, reference: "TX-05", amount: 993, day: 5, category: "salary"},
  {id: 3, reference: "TX-08", amount: 900, day: 3, category: "fun"},
  {id: 4, reference: "TX-02", amount: 341, day: 10, category: "salary"},
  {id: 5, reference: "TX-01", amount: 212, day: 27, category: "travel"},
  {id: 6, reference: "TX-06", amount: -295, day: 17, category: "salary"},
  {id: 7, reference: "TX-03", amount: 201, day: 8, category: "travel"},
  {id: 8, reference: "TX-11", amount: -298, day: 4, category: "travel"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  bumpAmount(TRANSACTIONS, "food", 10);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("with \"food\", 10", () => {
  expect(bumpAmount(TRANSACTIONS, "food", 10)).toEqual([{"id":1,"reference":"TX-07","amount":672,"day":27,"category":"salary"},{"id":2,"reference":"TX-05","amount":993,"day":5,"category":"salary"},{"id":3,"reference":"TX-08","amount":900,"day":3,"category":"fun"},{"id":4,"reference":"TX-02","amount":341,"day":10,"category":"salary"},{"id":5,"reference":"TX-01","amount":212,"day":27,"category":"travel"},{"id":6,"reference":"TX-06","amount":-295,"day":17,"category":"salary"},{"id":7,"reference":"TX-03","amount":201,"day":8,"category":"travel"},{"id":8,"reference":"TX-11","amount":-298,"day":4,"category":"travel"}]);
});

test("with \"rent\", 1", () => {
  expect(bumpAmount(TRANSACTIONS, "rent", 1)).toEqual([{"id":1,"reference":"TX-07","amount":672,"day":27,"category":"salary"},{"id":2,"reference":"TX-05","amount":993,"day":5,"category":"salary"},{"id":3,"reference":"TX-08","amount":900,"day":3,"category":"fun"},{"id":4,"reference":"TX-02","amount":341,"day":10,"category":"salary"},{"id":5,"reference":"TX-01","amount":212,"day":27,"category":"travel"},{"id":6,"reference":"TX-06","amount":-295,"day":17,"category":"salary"},{"id":7,"reference":"TX-03","amount":201,"day":8,"category":"travel"},{"id":8,"reference":"TX-11","amount":-298,"day":4,"category":"travel"}]);
});
