const BOOKS = [
  {id: 1, title: "Rebecca", pages: 426, year: 1835, genre: "classic", available: true},
  {id: 2, title: "Persuasion", pages: 343, year: 1966, genre: "fiction", available: false},
  {id: 3, title: "Ulysses", pages: 709, year: 1891, genre: "tech", available: false},
  {id: 4, title: "Hamlet", pages: 622, year: 1979, genre: "tech", available: false},
  {id: 5, title: "Emma", pages: 756, year: 1959, genre: "sci-fi", available: false},
  {id: 6, title: "Dune", pages: 158, year: 1854, genre: "sci-fi", available: true},
  {id: 7, title: "Neuromancer", pages: 184, year: 1983, genre: "tech", available: true},
  {id: 8, title: "Walden", pages: 438, year: 1816, genre: "fiction", available: false}
];

test("with 343", () => {
  expect(allBooksUnder(BOOKS, 343)).toEqual(false);
});

test("with 757", () => {
  expect(allBooksUnder(BOOKS, 757)).toEqual(true);
});

test("with 756", () => {
  expect(allBooksUnder(BOOKS, 756)).toEqual(false);
});
