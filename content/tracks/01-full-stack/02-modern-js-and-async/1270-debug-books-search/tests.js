const BOOKS = [
  {id: 1, title: "Dune", pages: 302, year: 1868, genre: "fiction", available: true},
  {id: 2, title: "Kindred", pages: 297, year: 1853, genre: "sci-fi", available: true},
  {id: 3, title: "Matilda", pages: 162, year: 1991, genre: "fiction", available: true},
  {id: 4, title: "Siddhartha", pages: 183, year: 1962, genre: "classic", available: true},
  {id: 5, title: "Neuromancer", pages: 767, year: 2008, genre: "tech", available: true},
  {id: 6, title: "Rebecca", pages: 376, year: 1919, genre: "fiction", available: false},
  {id: 7, title: "Clean Code", pages: 215, year: 1859, genre: "sci-fi", available: true},
  {id: 8, title: "Hamlet", pages: 668, year: 1866, genre: "classic", available: true}
];

test("with \"id\"", () => {
  expect(searchBooks(BOOKS, "id")).toEqual(["Siddhartha"]);
});

test("with \"ID\"", () => {
  expect(searchBooks(BOOKS, "ID")).toEqual(["Siddhartha"]);
});

test("with \"  \"", () => {
  expect(searchBooks(BOOKS, "  ")).toEqual(["Dune","Kindred","Matilda","Siddhartha","Neuromancer","Rebecca","Clean Code","Hamlet"]);
});

test("with \"zzz\"", () => {
  expect(searchBooks(BOOKS, "zzz")).toEqual([]);
});
