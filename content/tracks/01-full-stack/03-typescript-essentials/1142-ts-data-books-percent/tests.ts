const BOOKS = [
  {id: 1, title: "Dune", pages: 583, year: 1817, genre: "fiction", available: false},
  {id: 2, title: "Emma", pages: 533, year: 1961, genre: "fiction", available: false},
  {id: 3, title: "Rebecca", pages: 225, year: 2012, genre: "sci-fi", available: true},
  {id: 4, title: "Kindred", pages: 451, year: 1860, genre: "sci-fi", available: true},
  {id: 5, title: "Siddhartha", pages: 204, year: 1916, genre: "sci-fi", available: true},
  {id: 6, title: "Hamlet", pages: 349, year: 1921, genre: "tech", available: false},
  {id: 7, title: "Walden", pages: 662, year: 1860, genre: "tech", available: false},
  {id: 8, title: "Clean Code", pages: 145, year: 1842, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(percentAvailable([])).toEqual(0);
});

test("all books", () => {
  expect(percentAvailable(BOOKS)).toEqual(38);
});
