const BOOKS = [
  {id: 1, title: "Ulysses", pages: 223, year: 1970, genre: "fiction", available: true},
  {id: 2, title: "Emma", pages: 384, year: 1856, genre: "tech", available: false},
  {id: 3, title: "Clean Code", pages: 718, year: 2011, genre: "sci-fi", available: true},
  {id: 4, title: "Matilda", pages: 257, year: 1854, genre: "sci-fi", available: true},
  {id: 5, title: "Neuromancer", pages: 661, year: 1979, genre: "classic", available: false},
  {id: 6, title: "Siddhartha", pages: 690, year: 1843, genre: "classic", available: false},
  {id: 7, title: "Dune", pages: 250, year: 1926, genre: "classic", available: false},
  {id: 8, title: "Persuasion", pages: 566, year: 1977, genre: "sci-fi", available: true}
];

test("with \"Emma\"", () => {
  expect(pagesOf(BOOKS, "Emma")).toEqual(384);
});

test("with \"Nope\"", () => {
  expect(pagesOf(BOOKS, "Nope")).toEqual(null);
});
