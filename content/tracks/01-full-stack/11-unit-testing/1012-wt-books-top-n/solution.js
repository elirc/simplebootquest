test('does not mutate the input', () => {
  const before = JSON.stringify(BOOKS);
  topBooksByPages(BOOKS, 1);
  expect(JSON.stringify(BOOKS)).toBe(before);
});

test("with 1", () => {
  expect(topBooksByPages(BOOKS, 1)).toEqual(["Kindred"]);
});

test("with 3", () => {
  expect(topBooksByPages(BOOKS, 3)).toEqual(["Kindred","Walden","Dune"]);
});

test("with 0", () => {
  expect(topBooksByPages(BOOKS, 0)).toEqual([]);
});
