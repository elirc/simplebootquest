const BOOKS = [
  {id: 1, title: "Clean Code", pages: 216, year: 1852, genre: "classic", available: false},
  {id: 2, title: "Siddhartha", pages: 589, year: 1830, genre: "classic", available: true},
  {id: 3, title: "Rebecca", pages: 123, year: 1965, genre: "sci-fi", available: false},
  {id: 4, title: "Matilda", pages: 502, year: 1930, genre: "tech", available: false},
  {id: 5, title: "Walden", pages: 199, year: 2002, genre: "classic", available: true},
  {id: 6, title: "Neuromancer", pages: 389, year: 2007, genre: "classic", available: true},
  {id: 7, title: "Persuasion", pages: 346, year: 1927, genre: "sci-fi", available: true},
  {id: 8, title: "Hamlet", pages: 615, year: 1967, genre: "tech", available: true}
];

test("an empty list", () => {
  expect(averagePages([])).toEqual(null);
});

test("all books", () => {
  expect(averagePages(BOOKS)).toEqual(372.4);
});
