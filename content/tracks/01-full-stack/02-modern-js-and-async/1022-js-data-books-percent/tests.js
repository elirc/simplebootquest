const BOOKS = [
  {id: 1, title: "Hamlet", pages: 195, year: 1916, genre: "sci-fi", available: true},
  {id: 2, title: "Persuasion", pages: 248, year: 1825, genre: "classic", available: false},
  {id: 3, title: "Matilda", pages: 330, year: 1929, genre: "sci-fi", available: true},
  {id: 4, title: "Emma", pages: 462, year: 1988, genre: "fiction", available: false},
  {id: 5, title: "Neuromancer", pages: 599, year: 1971, genre: "fiction", available: false},
  {id: 6, title: "Ulysses", pages: 255, year: 1867, genre: "fiction", available: false},
  {id: 7, title: "Kindred", pages: 619, year: 1955, genre: "classic", available: false},
  {id: 8, title: "Rebecca", pages: 429, year: 1974, genre: "tech", available: true}
];

test("an empty list", () => {
  expect(percentAvailable([])).toEqual(0);
});

test("all books", () => {
  expect(percentAvailable(BOOKS)).toEqual(38);
});
