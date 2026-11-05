test("an empty list", () => {
  expect(averageYear([])).toEqual(null);
});

test("all books", () => {
  expect(averageYear(BOOKS)).toEqual(1914);
});
