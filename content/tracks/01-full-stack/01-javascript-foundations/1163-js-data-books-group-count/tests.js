const BOOKS = [
  {id: 1, title: "Neuromancer", pages: 254, year: 1899, genre: "sci-fi", available: true},
  {id: 2, title: "Kindred", pages: 417, year: 1989, genre: "sci-fi", available: false},
  {id: 3, title: "Walden", pages: 300, year: 1853, genre: "fiction", available: false},
  {id: 4, title: "Dune", pages: 484, year: 1869, genre: "tech", available: false},
  {id: 5, title: "Clean Code", pages: 489, year: 1877, genre: "fiction", available: false},
  {id: 6, title: "Hamlet", pages: 546, year: 1916, genre: "tech", available: true},
  {id: 7, title: "Persuasion", pages: 165, year: 1840, genre: "tech", available: false},
  {id: 8, title: "Siddhartha", pages: 206, year: 1870, genre: "classic", available: true}
];

test("an empty list", () => {
  expect(countBooksPerGenre([])).toEqual({});
});

test("all books", () => {
  expect(countBooksPerGenre(BOOKS)).toEqual({"sci-fi":2,"fiction":2,"tech":3,"classic":1});
});
