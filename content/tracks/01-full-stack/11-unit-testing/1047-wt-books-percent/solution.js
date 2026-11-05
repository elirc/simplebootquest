test("an empty list", () => {
  expect(percentAvailable([])).toEqual(0);
});

test("all books", () => {
  expect(percentAvailable(BOOKS)).toEqual(63);
});
