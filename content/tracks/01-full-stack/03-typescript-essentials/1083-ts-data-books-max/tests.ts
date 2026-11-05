const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 567, year: 1966, genre: "fiction", available: false},
  {id: 2, title: "Neuromancer", pages: 431, year: 2004, genre: "fiction", available: true},
  {id: 3, title: "Kindred", pages: 707, year: 1919, genre: "fiction", available: false},
  {id: 4, title: "Clean Code", pages: 288, year: 1887, genre: "tech", available: true},
  {id: 5, title: "Persuasion", pages: 176, year: 1817, genre: "classic", available: true},
  {id: 6, title: "Matilda", pages: 497, year: 1945, genre: "classic", available: false},
  {id: 7, title: "Ulysses", pages: 595, year: 1894, genre: "tech", available: false},
  {id: 8, title: "Hamlet", pages: 288, year: 1860, genre: "tech", available: false}
];

test("an empty list", () => {
  expect(highestPages([])).toEqual(null);
});

test("all books", () => {
  expect(highestPages(BOOKS)).toEqual("Kindred");
});
