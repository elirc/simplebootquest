const BOOKS = [
  {id: 1, title: "Dune", pages: 351, year: 1932, genre: "fiction", available: false},
  {id: 2, title: "Emma", pages: 267, year: 1975, genre: "sci-fi", available: true},
  {id: 3, title: "Rebecca", pages: 639, year: 2009, genre: "sci-fi", available: true},
  {id: 4, title: "Hamlet", pages: 542, year: 1945, genre: "classic", available: false},
  {id: 5, title: "Kindred", pages: 569, year: 1869, genre: "tech", available: true},
  {id: 6, title: "Persuasion", pages: 690, year: 1994, genre: "sci-fi", available: true},
  {id: 7, title: "Clean Code", pages: 586, year: 1891, genre: "classic", available: false},
  {id: 8, title: "Matilda", pages: 651, year: 1899, genre: "fiction", available: false}
];

test("an empty list", () => {
  expect(pagesPerGenre([])).toEqual({});
});

test("all books", () => {
  expect(pagesPerGenre(BOOKS)).toEqual({"fiction":1002,"sci-fi":1596,"classic":1128,"tech":569});
});
