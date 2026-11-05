test("with 1", () => {
  expect(nthByPages(BOOKS, 1)).toEqual("Emma");
});

test("with 2", () => {
  expect(nthByPages(BOOKS, 2)).toEqual("Siddhartha");
});

test("with 5", () => {
  expect(nthByPages(BOOKS, 5)).toEqual("Neuromancer");
});

test("with 0", () => {
  expect(nthByPages(BOOKS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPages(BOOKS, 99)).toEqual(null);
});
