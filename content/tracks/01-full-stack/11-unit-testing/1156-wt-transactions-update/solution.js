test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  bumpDay(TRANSACTIONS, "food", 10);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("with \"food\", 10", () => {
  expect(bumpDay(TRANSACTIONS, "food", 10)).toEqual([{"id":1,"reference":"TX-07","amount":-280,"day":25,"category":"fun"},{"id":2,"reference":"TX-11","amount":416,"day":8,"category":"rent"},{"id":3,"reference":"TX-06","amount":681,"day":13,"category":"salary"},{"id":4,"reference":"TX-08","amount":945,"day":20,"category":"salary"},{"id":5,"reference":"TX-12","amount":-19,"day":11,"category":"rent"},{"id":6,"reference":"TX-10","amount":-326,"day":4,"category":"rent"},{"id":7,"reference":"TX-09","amount":-219,"day":23,"category":"rent"},{"id":8,"reference":"TX-05","amount":49,"day":6,"category":"fun"}]);
});

test("with \"rent\", 1", () => {
  expect(bumpDay(TRANSACTIONS, "rent", 1)).toEqual([{"id":1,"reference":"TX-07","amount":-280,"day":25,"category":"fun"},{"id":2,"reference":"TX-11","amount":416,"day":9,"category":"rent"},{"id":3,"reference":"TX-06","amount":681,"day":13,"category":"salary"},{"id":4,"reference":"TX-08","amount":945,"day":20,"category":"salary"},{"id":5,"reference":"TX-12","amount":-19,"day":12,"category":"rent"},{"id":6,"reference":"TX-10","amount":-326,"day":5,"category":"rent"},{"id":7,"reference":"TX-09","amount":-219,"day":24,"category":"rent"},{"id":8,"reference":"TX-05","amount":49,"day":6,"category":"fun"}]);
});
