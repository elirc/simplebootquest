const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 288, year: 1862, genre: "classic", available: true},
  {id: 2, title: "Clean Code", pages: 696, year: 1831, genre: "sci-fi", available: false},
  {id: 3, title: "Persuasion", pages: 280, year: 1887, genre: "tech", available: false},
  {id: 4, title: "Dune", pages: 445, year: 1825, genre: "tech", available: false},
  {id: 5, title: "Kindred", pages: 363, year: 2001, genre: "sci-fi", available: false},
  {id: 6, title: "Walden", pages: 339, year: 1884, genre: "classic", available: true},
  {id: 7, title: "Neuromancer", pages: 312, year: 1825, genre: "classic", available: true},
  {id: 8, title: "Matilda", pages: 513, year: 1921, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(lowestPages([])).toEqual(null);
});

test("all books", () => {
  expect(lowestPages(BOOKS)).toEqual("Persuasion");
});
