const BEFORE = [
  {id: 1, title: "Dune", pages: 663, year: 1954, genre: "tech", available: false},
  {id: 2, title: "Emma", pages: 433, year: 1994, genre: "fiction", available: false},
  {id: 3, title: "Matilda", pages: 212, year: 2004, genre: "tech", available: true},
  {id: 4, title: "Persuasion", pages: 666, year: 1829, genre: "classic", available: false},
  {id: 5, title: "Clean Code", pages: 348, year: 1999, genre: "sci-fi", available: false},
  {id: 6, title: "Ulysses", pages: 330, year: 1974, genre: "classic", available: true},
  {id: 7, title: "Kindred", pages: 560, year: 1927, genre: "sci-fi", available: false},
  {id: 8, title: "Hamlet", pages: 449, year: 1884, genre: "fiction", available: false}
];
const AFTER = [
  {id: 1, title: "Dune", pages: 663, year: 1954, genre: "tech", available: false},
  {id: 2, title: "Emma", pages: 440, year: 1994, genre: "fiction", available: false},
  {id: 3, title: "Matilda", pages: 212, year: 2004, genre: "tech", available: true},
  {id: 4, title: "Persuasion", pages: 666, year: 1829, genre: "classic", available: false},
  {id: 5, title: "Clean Code", pages: 355, year: 1999, genre: "sci-fi", available: false},
  {id: 6, title: "Ulysses", pages: 330, year: 1974, genre: "classic", available: true},
  {id: 7, title: "Kindred", pages: 560, year: 1927, genre: "sci-fi", available: false},
  {id: 8, title: "Hamlet", pages: 456, year: 1884, genre: "fiction", available: false}
];

test("finds changed ids", () => {
  expect(pagesChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(pagesChanges(BEFORE, BEFORE)).toEqual([]);
});
