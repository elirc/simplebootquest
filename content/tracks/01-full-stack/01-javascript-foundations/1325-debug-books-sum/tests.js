const BOOKS = [
  {id: 1, title: "Matilda", pages: 488, year: 1918, genre: "fiction", available: false},
  {id: 2, title: "Hamlet", pages: 556, year: 1891, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 656, year: 1894, genre: "classic", available: false},
  {id: 4, title: "Neuromancer", pages: 200, year: 1993, genre: "classic", available: false},
  {id: 5, title: "Clean Code", pages: 424, year: 1892, genre: "sci-fi", available: false},
  {id: 6, title: "Rebecca", pages: 689, year: 1842, genre: "tech", available: true},
  {id: 7, title: "Kindred", pages: 439, year: 1980, genre: "sci-fi", available: false},
  {id: 8, title: "Persuasion", pages: 256, year: 1949, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(totalPages([])).toEqual(0);
});

test("all books", () => {
  expect(totalPages(BOOKS)).toEqual(3708);
});
