test('does not mutate the input', () => {
  const before = JSON.stringify(BOOKS);
  booksByPages(BOOKS);
  expect(JSON.stringify(BOOKS)).toBe(before);
});

test("all books", () => {
  expect(booksByPages(BOOKS)).toEqual(["Neuromancer","Kindred","Siddhartha","Dune","Ulysses","Walden","Clean Code","Matilda"]);
});
