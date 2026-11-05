const BOOKS = [
  {id: 1, title: "Clean Code", pages: 467, year: 1997, genre: "fiction", available: false},
  {id: 2, title: "Rebecca", pages: 650, year: 1914, genre: "sci-fi", available: true},
  {id: 3, title: "Kindred", pages: 138, year: 1845, genre: "fiction", available: true},
  {id: 4, title: "Ulysses", pages: 556, year: 1846, genre: "fiction", available: true},
  {id: 5, title: "Matilda", pages: 436, year: 1889, genre: "classic", available: true},
  {id: 6, title: "Siddhartha", pages: 303, year: 1985, genre: "classic", available: false},
  {id: 7, title: "Neuromancer", pages: 183, year: 1854, genre: "sci-fi", available: false},
  {id: 8, title: "Dune", pages: 635, year: 2005, genre: "fiction", available: true}
];

test("with 303", () => {
  expect(allBooksUnder(BOOKS, 303)).toEqual(false);
});

test("with 651", () => {
  expect(allBooksUnder(BOOKS, 651)).toEqual(true);
});

test("with 650", () => {
  expect(allBooksUnder(BOOKS, 650)).toEqual(false);
});
