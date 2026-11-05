const BOOKS = [
  {id: 1, title: "Kindred", pages: 345, year: 1953, genre: "classic", available: true},
  {id: 2, title: "Neuromancer", pages: 185, year: 2003, genre: "fiction", available: true},
  {id: 3, title: "Hamlet", pages: 606, year: 1995, genre: "classic", available: true},
  {id: 4, title: "Matilda", pages: 693, year: 1862, genre: "tech", available: false},
  {id: 5, title: "Emma", pages: 581, year: 1966, genre: "tech", available: false},
  {id: 6, title: "Siddhartha", pages: 146, year: 1842, genre: "fiction", available: false},
  {id: 7, title: "Walden", pages: 475, year: 1901, genre: "sci-fi", available: false},
  {id: 8, title: "Dune", pages: 606, year: 2014, genre: "tech", available: false}
];

test("an empty list", () => {
  expect(averagePages([])).toEqual(null);
});

test("all books", () => {
  expect(averagePages(BOOKS)).toEqual(454.6);
});
