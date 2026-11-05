const BOOKS = [
  {id: 1, title: "Ulysses", pages: 434, year: 1929, genre: "tech", available: false},
  {id: 2, title: "Emma", pages: 329, year: 1898, genre: "classic", available: false},
  {id: 3, title: "Neuromancer", pages: 403, year: 2011, genre: "sci-fi", available: true},
  {id: 4, title: "Rebecca", pages: 454, year: 1992, genre: "classic", available: false},
  {id: 5, title: "Dune", pages: 702, year: 2002, genre: "classic", available: false},
  {id: 6, title: "Persuasion", pages: 628, year: 1830, genre: "tech", available: false},
  {id: 7, title: "Kindred", pages: 216, year: 1964, genre: "sci-fi", available: false},
  {id: 8, title: "Hamlet", pages: 691, year: 1835, genre: "tech", available: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(BOOKS);
  booksByPages(BOOKS);
  expect(JSON.stringify(BOOKS)).toBe(before);
});

test("all books", () => {
  expect(booksByPages(BOOKS)).toEqual(["Kindred","Emma","Neuromancer","Ulysses","Rebecca","Persuasion","Hamlet","Dune"]);
});
