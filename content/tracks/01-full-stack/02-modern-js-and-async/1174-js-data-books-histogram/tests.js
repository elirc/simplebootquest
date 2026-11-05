const BOOKS = [
  {id: 1, title: "Dune", pages: 230, year: 1950, genre: "classic", available: true},
  {id: 2, title: "Emma", pages: 491, year: 1865, genre: "fiction", available: false},
  {id: 3, title: "Clean Code", pages: 214, year: 1815, genre: "fiction", available: true},
  {id: 4, title: "Walden", pages: 185, year: 1880, genre: "sci-fi", available: true},
  {id: 5, title: "Hamlet", pages: 258, year: 1923, genre: "tech", available: true},
  {id: 6, title: "Kindred", pages: 399, year: 1920, genre: "classic", available: true},
  {id: 7, title: "Siddhartha", pages: 366, year: 1929, genre: "sci-fi", available: false},
  {id: 8, title: "Rebecca", pages: 647, year: 1951, genre: "tech", available: true}
];

test("with 165", () => {
  expect(pagesHistogram(BOOKS, 165)).toEqual({"165":4,"330":3,"495":1});
});

test("with 330", () => {
  expect(pagesHistogram(BOOKS, 330)).toEqual({"0":4,"330":4});
});
