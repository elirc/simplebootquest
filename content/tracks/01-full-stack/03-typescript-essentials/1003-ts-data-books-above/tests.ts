const BOOKS = [
  {id: 1, title: "Ulysses", pages: 164, year: 1978, genre: "tech", available: true},
  {id: 2, title: "Kindred", pages: 276, year: 1870, genre: "sci-fi", available: true},
  {id: 3, title: "Rebecca", pages: 632, year: 1994, genre: "classic", available: false},
  {id: 4, title: "Walden", pages: 232, year: 1904, genre: "tech", available: false},
  {id: 5, title: "Siddhartha", pages: 229, year: 1938, genre: "tech", available: true},
  {id: 6, title: "Hamlet", pages: 142, year: 1819, genre: "tech", available: true},
  {id: 7, title: "Emma", pages: 537, year: 2009, genre: "classic", available: false},
  {id: 8, title: "Clean Code", pages: 646, year: 1974, genre: "fiction", available: false}
];

test("with 229", () => {
  expect(booksAbove(BOOKS, 229)).toEqual(["Kindred","Rebecca","Walden","Emma","Clean Code"]);
});

test("with 276", () => {
  expect(booksAbove(BOOKS, 276)).toEqual(["Rebecca","Emma","Clean Code"]);
});

test("with 999999", () => {
  expect(booksAbove(BOOKS, 999999)).toEqual([]);
});
