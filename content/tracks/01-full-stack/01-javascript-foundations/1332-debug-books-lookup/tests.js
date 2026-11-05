const BOOKS = [
  {id: 1, title: "Dune", pages: 282, year: 1889, genre: "fiction", available: true},
  {id: 2, title: "Persuasion", pages: 235, year: 1842, genre: "classic", available: false},
  {id: 3, title: "Siddhartha", pages: 369, year: 1863, genre: "tech", available: true},
  {id: 4, title: "Kindred", pages: 530, year: 1833, genre: "tech", available: true},
  {id: 5, title: "Walden", pages: 161, year: 1870, genre: "tech", available: false},
  {id: 6, title: "Ulysses", pages: 356, year: 1911, genre: "tech", available: false},
  {id: 7, title: "Hamlet", pages: 674, year: 1873, genre: "sci-fi", available: false},
  {id: 8, title: "Matilda", pages: 593, year: 2009, genre: "sci-fi", available: false}
];

test("with \"Hamlet\"", () => {
  expect(pagesOf(BOOKS, "Hamlet")).toEqual(674);
});

test("with \"Nope\"", () => {
  expect(pagesOf(BOOKS, "Nope")).toEqual(null);
});
