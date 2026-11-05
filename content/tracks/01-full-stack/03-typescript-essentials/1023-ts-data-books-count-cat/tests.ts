const BOOKS = [
  {id: 1, title: "Clean Code", pages: 134, year: 1908, genre: "fiction", available: false},
  {id: 2, title: "Hamlet", pages: 169, year: 1917, genre: "classic", available: false},
  {id: 3, title: "Kindred", pages: 685, year: 1918, genre: "classic", available: true},
  {id: 4, title: "Neuromancer", pages: 714, year: 1828, genre: "sci-fi", available: false},
  {id: 5, title: "Walden", pages: 220, year: 1936, genre: "tech", available: true},
  {id: 6, title: "Persuasion", pages: 701, year: 1914, genre: "sci-fi", available: true},
  {id: 7, title: "Siddhartha", pages: 452, year: 1988, genre: "classic", available: true},
  {id: 8, title: "Ulysses", pages: 775, year: 1953, genre: "sci-fi", available: true}
];

test("with \"fiction\"", () => {
  expect(countBooksByGenre(BOOKS, "fiction")).toEqual(1);
});

test("with \"classic\"", () => {
  expect(countBooksByGenre(BOOKS, "classic")).toEqual(3);
});

test("with \"tech\"", () => {
  expect(countBooksByGenre(BOOKS, "tech")).toEqual(1);
});

test("with \"nope\"", () => {
  expect(countBooksByGenre(BOOKS, "nope")).toEqual(0);
});
