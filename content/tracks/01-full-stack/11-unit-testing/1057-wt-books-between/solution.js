test("with 443, 660", () => {
  expect(booksInRange(BOOKS, 443, 660)).toEqual(["Hamlet","Clean Code","Emma"]);
});

test("with 660, 691", () => {
  expect(booksInRange(BOOKS, 660, 691)).toEqual(["Siddhartha","Clean Code"]);
});

test("with 443, 443", () => {
  expect(booksInRange(BOOKS, 443, 443)).toEqual(["Hamlet"]);
});
