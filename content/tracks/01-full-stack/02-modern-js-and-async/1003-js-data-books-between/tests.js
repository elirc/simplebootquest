const BOOKS = [
  {id: 1, title: "Clean Code", pages: 396, year: 1823, genre: "classic", available: true},
  {id: 2, title: "Rebecca", pages: 739, year: 1848, genre: "fiction", available: false},
  {id: 3, title: "Dune", pages: 474, year: 1983, genre: "classic", available: false},
  {id: 4, title: "Persuasion", pages: 374, year: 1988, genre: "fiction", available: true},
  {id: 5, title: "Hamlet", pages: 690, year: 1860, genre: "tech", available: false},
  {id: 6, title: "Matilda", pages: 747, year: 1818, genre: "fiction", available: true},
  {id: 7, title: "Ulysses", pages: 767, year: 1984, genre: "sci-fi", available: true},
  {id: 8, title: "Siddhartha", pages: 312, year: 1820, genre: "sci-fi", available: true}
];

test("with 396, 690", () => {
  expect(booksInRange(BOOKS, 396, 690)).toEqual(["Clean Code","Dune","Hamlet"]);
});

test("with 690, 739", () => {
  expect(booksInRange(BOOKS, 690, 739)).toEqual(["Rebecca","Hamlet"]);
});

test("with 396, 396", () => {
  expect(booksInRange(BOOKS, 396, 396)).toEqual(["Clean Code"]);
});
