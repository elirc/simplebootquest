const BOOKS = [
  {id: 1, title: "Hamlet", pages: 144, year: 1898, genre: "tech", available: true},
  {id: 2, title: "Matilda", pages: 485, year: 1832, genre: "tech", available: true},
  {id: 3, title: "Siddhartha", pages: 214, year: 1864, genre: "sci-fi", available: false},
  {id: 4, title: "Persuasion", pages: 698, year: 1978, genre: "sci-fi", available: true},
  {id: 5, title: "Kindred", pages: 336, year: 1987, genre: "sci-fi", available: false},
  {id: 6, title: "Emma", pages: 272, year: 1951, genre: "tech", available: true},
  {id: 7, title: "Clean Code", pages: 672, year: 1863, genre: "tech", available: true},
  {id: 8, title: "Dune", pages: 392, year: 1813, genre: "classic", available: true}
];

test("with 1, 3", () => {
  expect(pageOfBooks(BOOKS, 1, 3)).toEqual({"items":["Hamlet","Matilda","Siddhartha"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfBooks(BOOKS, 2, 3)).toEqual({"items":["Persuasion","Kindred","Emma"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfBooks(BOOKS, 3, 3)).toEqual({"items":["Clean Code","Dune"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfBooks(BOOKS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
