const BOOKS = [
  {id: 1, title: "Hamlet", pages: 492, year: 1874, genre: "classic", available: true},
  {id: 2, title: "Ulysses", pages: 438, year: 1823, genre: "tech", available: true},
  {id: 3, title: "Siddhartha", pages: 605, year: 1857, genre: "sci-fi", available: false},
  {id: 4, title: "Dune", pages: 460, year: 1872, genre: "classic", available: true},
  {id: 5, title: "Walden", pages: 160, year: 1958, genre: "tech", available: true},
  {id: 6, title: "Persuasion", pages: 731, year: 1923, genre: "fiction", available: false},
  {id: 7, title: "Clean Code", pages: 312, year: 1949, genre: "sci-fi", available: true},
  {id: 8, title: "Rebecca", pages: 502, year: 1878, genre: "sci-fi", available: false}
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
  expect(topBooksByPages(BOOKS, 3)).toEqual(["Persuasion","Siddhartha","Rebecca"]);
});

test("with 0", () => {
  expect(topBooksByPages(BOOKS, 0)).toEqual([]);
});
