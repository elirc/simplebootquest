const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 769, year: 1843, genre: "sci-fi", available: true},
  {id: 2, title: "Dune", pages: 548, year: 1979, genre: "tech", available: false},
  {id: 3, title: "Neuromancer", pages: 181, year: 1826, genre: "fiction", available: true},
  {id: 4, title: "Matilda", pages: 631, year: 1837, genre: "tech", available: false},
  {id: 5, title: "Ulysses", pages: 625, year: 2013, genre: "sci-fi", available: true},
  {id: 6, title: "Emma", pages: 354, year: 1862, genre: "fiction", available: true},
  {id: 7, title: "Clean Code", pages: 326, year: 1872, genre: "sci-fi", available: true},
  {id: 8, title: "Rebecca", pages: 684, year: 1867, genre: "classic", available: true}
];

test("with 1843", () => {
  expect(booksAbove(BOOKS, 1843)).toEqual(["Dune","Ulysses","Emma","Clean Code","Rebecca"]);
});

test("with 1867", () => {
  expect(booksAbove(BOOKS, 1867)).toEqual(["Dune","Ulysses","Clean Code"]);
});

test("with 999999", () => {
  expect(booksAbove(BOOKS, 999999)).toEqual([]);
});
