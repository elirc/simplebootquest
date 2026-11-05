const BOOKS = [
  {id: 1, title: "Matilda", pages: 675, year: 2004, genre: "tech", available: true},
  {id: 2, title: "Clean Code", pages: 433, year: 1915, genre: "fiction", available: true},
  {id: 3, title: "Siddhartha", pages: 394, year: 1988, genre: "fiction", available: false},
  {id: 4, title: "Rebecca", pages: 268, year: 1943, genre: "sci-fi", available: false},
  {id: 5, title: "Walden", pages: 313, year: 2005, genre: "fiction", available: false},
  {id: 6, title: "Hamlet", pages: 421, year: 1859, genre: "fiction", available: false},
  {id: 7, title: "Kindred", pages: 728, year: 1957, genre: "fiction", available: false},
  {id: 8, title: "Neuromancer", pages: 247, year: 1878, genre: "tech", available: true}
];

test("an empty list", () => {
  expect(countBooksPerGenre([])).toEqual({});
});

test("all books", () => {
  expect(countBooksPerGenre(BOOKS)).toEqual({"tech":2,"fiction":5,"sci-fi":1});
});
