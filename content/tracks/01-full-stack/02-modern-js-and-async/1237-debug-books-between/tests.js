const BOOKS = [
  {id: 1, title: "Rebecca", pages: 621, year: 1980, genre: "fiction", available: true},
  {id: 2, title: "Hamlet", pages: 203, year: 1843, genre: "fiction", available: true},
  {id: 3, title: "Ulysses", pages: 503, year: 1951, genre: "classic", available: true},
  {id: 4, title: "Emma", pages: 351, year: 1824, genre: "sci-fi", available: true},
  {id: 5, title: "Clean Code", pages: 626, year: 1933, genre: "classic", available: true},
  {id: 6, title: "Walden", pages: 159, year: 2005, genre: "classic", available: false},
  {id: 7, title: "Neuromancer", pages: 621, year: 1817, genre: "tech", available: true},
  {id: 8, title: "Persuasion", pages: 672, year: 1918, genre: "sci-fi", available: false}
];

test("with 351, 621", () => {
  expect(booksInRange(BOOKS, 351, 621)).toEqual(["Rebecca","Ulysses","Emma","Neuromancer"]);
});

test("with 621, 621", () => {
  expect(booksInRange(BOOKS, 621, 621)).toEqual(["Rebecca","Neuromancer"]);
});

test("with 351, 351", () => {
  expect(booksInRange(BOOKS, 351, 351)).toEqual(["Emma"]);
});
