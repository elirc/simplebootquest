const BOOKS = [
  {id: 1, title: "Rebecca", pages: 582, year: 1875, genre: "fiction", available: false},
  {id: 2, title: "Clean Code", pages: 363, year: 1845, genre: "tech", available: true},
  {id: 3, title: "Neuromancer", pages: 387, year: 1888, genre: "fiction", available: false},
  {id: 4, title: "Matilda", pages: 757, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Emma", pages: 360, year: 1830, genre: "classic", available: true},
  {id: 6, title: "Hamlet", pages: 326, year: 1929, genre: "tech", available: false},
  {id: 7, title: "Dune", pages: 698, year: 1879, genre: "classic", available: true},
  {id: 8, title: "Ulysses", pages: 684, year: 1827, genre: "classic", available: true}
];

test("with \"fiction\"", () => {
  expect(countBooksByGenre(BOOKS, "fiction")).toEqual(2);
});

test("with \"classic\"", () => {
  expect(countBooksByGenre(BOOKS, "classic")).toEqual(3);
});

test("with \"tech\"", () => {
  expect(countBooksByGenre(BOOKS, "tech")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countBooksByGenre(BOOKS, "nope")).toEqual(0);
});
