const BOOKS = [
  {id: 1, title: "Matilda", pages: 503, year: 2003, genre: "classic", available: false},
  {id: 2, title: "Persuasion", pages: 727, year: 1865, genre: "fiction", available: true},
  {id: 3, title: "Neuromancer", pages: 312, year: 1947, genre: "sci-fi", available: false},
  {id: 4, title: "Rebecca", pages: 531, year: 1864, genre: "tech", available: true},
  {id: 5, title: "Dune", pages: 140, year: 1886, genre: "classic", available: false},
  {id: 6, title: "Siddhartha", pages: 212, year: 1968, genre: "tech", available: true},
  {id: 7, title: "Kindred", pages: 258, year: 2005, genre: "sci-fi", available: true},
  {id: 8, title: "Walden", pages: 265, year: 1933, genre: "tech", available: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(BOOKS);
  topBooksByPages(BOOKS, 1);
  expect(JSON.stringify(BOOKS)).toBe(before);
});

test("with 1", () => {
  expect(topBooksByPages(BOOKS, 1)).toEqual(["Persuasion"]);
});

test("with 3", () => {
  expect(topBooksByPages(BOOKS, 3)).toEqual(["Persuasion","Rebecca","Matilda"]);
});

test("with 0", () => {
  expect(topBooksByPages(BOOKS, 0)).toEqual([]);
});
