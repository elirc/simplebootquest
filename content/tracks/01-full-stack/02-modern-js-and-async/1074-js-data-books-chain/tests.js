const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 399, year: 2002, genre: "fiction", available: true},
  {id: 2, title: "Persuasion", pages: 427, year: 1990, genre: "classic", available: false},
  {id: 3, title: "Hamlet", pages: 269, year: 1939, genre: "fiction", available: false},
  {id: 4, title: "Neuromancer", pages: 301, year: 1950, genre: "tech", available: true},
  {id: 5, title: "Emma", pages: 761, year: 1985, genre: "sci-fi", available: false},
  {id: 6, title: "Dune", pages: 575, year: 1861, genre: "sci-fi", available: true},
  {id: 7, title: "Ulysses", pages: 545, year: 1845, genre: "sci-fi", available: true},
  {id: 8, title: "Clean Code", pages: 274, year: 1815, genre: "sci-fi", available: true}
];

test("with \"fiction\"", () => {
  expect(booksInGenreRanked(BOOKS, "fiction")).toEqual(["Siddhartha","Hamlet"]);
});

test("with \"classic\"", () => {
  expect(booksInGenreRanked(BOOKS, "classic")).toEqual(["Persuasion"]);
});

test("with \"tech\"", () => {
  expect(booksInGenreRanked(BOOKS, "tech")).toEqual(["Neuromancer"]);
});
