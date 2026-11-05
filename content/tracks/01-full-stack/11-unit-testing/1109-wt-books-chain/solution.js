test("with \"fiction\"", () => {
  expect(booksInGenreRanked(BOOKS, "fiction")).toEqual(["Emma","Clean Code","Kindred"]);
});

test("with \"classic\"", () => {
  expect(booksInGenreRanked(BOOKS, "classic")).toEqual(["Siddhartha","Neuromancer"]);
});

test("with \"tech\"", () => {
  expect(booksInGenreRanked(BOOKS, "tech")).toEqual(["Hamlet","Ulysses","Persuasion"]);
});
