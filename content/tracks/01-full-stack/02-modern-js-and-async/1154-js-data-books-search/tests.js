const BOOKS = [
  {id: 1, title: "Dune", pages: 660, year: 1925, genre: "tech", available: false},
  {id: 2, title: "Persuasion", pages: 360, year: 1947, genre: "tech", available: false},
  {id: 3, title: "Matilda", pages: 169, year: 1893, genre: "sci-fi", available: true},
  {id: 4, title: "Neuromancer", pages: 425, year: 1841, genre: "tech", available: false},
  {id: 5, title: "Rebecca", pages: 193, year: 1899, genre: "sci-fi", available: false},
  {id: 6, title: "Walden", pages: 422, year: 1823, genre: "sci-fi", available: false},
  {id: 7, title: "Ulysses", pages: 760, year: 1995, genre: "fiction", available: true},
  {id: 8, title: "Siddhartha", pages: 733, year: 1844, genre: "tech", available: true}
];

test("with \"ly\"", () => {
  expect(searchBooks(BOOKS, "ly")).toEqual(["Ulysses"]);
});

test("with \"LY\"", () => {
  expect(searchBooks(BOOKS, "LY")).toEqual(["Ulysses"]);
});

test("with \"  \"", () => {
  expect(searchBooks(BOOKS, "  ")).toEqual(["Dune","Persuasion","Matilda","Neuromancer","Rebecca","Walden","Ulysses","Siddhartha"]);
});

test("with \"zzz\"", () => {
  expect(searchBooks(BOOKS, "zzz")).toEqual([]);
});
