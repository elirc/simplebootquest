const BOOKS = [
  {id: 1, title: "Ulysses", pages: 270, year: 1930, genre: "sci-fi", available: true},
  {id: 2, title: "Rebecca", pages: 188, year: 1939, genre: "fiction", available: false},
  {id: 3, title: "Kindred", pages: 482, year: 1869, genre: "sci-fi", available: true},
  {id: 4, title: "Emma", pages: 610, year: 1837, genre: "sci-fi", available: false},
  {id: 5, title: "Neuromancer", pages: 714, year: 1822, genre: "sci-fi", available: true},
  {id: 6, title: "Dune", pages: 256, year: 1822, genre: "tech", available: false},
  {id: 7, title: "Clean Code", pages: 142, year: 1951, genre: "sci-fi", available: false},
  {id: 8, title: "Matilda", pages: 539, year: 1929, genre: "sci-fi", available: false}
];

test("with 256, 482", () => {
  expect(booksInRange(BOOKS, 256, 482)).toEqual(["Ulysses","Kindred","Dune"]);
});

test("with 482, 539", () => {
  expect(booksInRange(BOOKS, 482, 539)).toEqual(["Kindred","Matilda"]);
});

test("with 256, 256", () => {
  expect(booksInRange(BOOKS, 256, 256)).toEqual(["Dune"]);
});
