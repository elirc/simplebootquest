const BOOKS = [
  {id: 1, title: "Kindred", pages: 596, year: 2002, genre: "fiction", available: true},
  {id: 2, title: "Persuasion", pages: 237, year: 1897, genre: "tech", available: false},
  {id: 3, title: "Dune", pages: 457, year: 1850, genre: "fiction", available: true},
  {id: 4, title: "Matilda", pages: 228, year: 1887, genre: "classic", available: false},
  {id: 5, title: "Walden", pages: 744, year: 1982, genre: "tech", available: false},
  {id: 6, title: "Ulysses", pages: 149, year: 1925, genre: "fiction", available: true},
  {id: 7, title: "Emma", pages: 450, year: 1815, genre: "fiction", available: false},
  {id: 8, title: "Hamlet", pages: 657, year: 1941, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(totalPages([])).toEqual(0);
});

test("all books", () => {
  expect(totalPages(BOOKS)).toEqual(3518);
});
