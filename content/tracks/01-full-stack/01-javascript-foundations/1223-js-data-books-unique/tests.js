const BOOKS = [
  {id: 1, title: "Kindred", pages: 694, year: 1947, genre: "sci-fi", available: true},
  {id: 2, title: "Persuasion", pages: 477, year: 1981, genre: "classic", available: false},
  {id: 3, title: "Neuromancer", pages: 523, year: 1954, genre: "tech", available: false},
  {id: 4, title: "Walden", pages: 531, year: 1908, genre: "sci-fi", available: false},
  {id: 5, title: "Matilda", pages: 414, year: 1880, genre: "fiction", available: false},
  {id: 6, title: "Emma", pages: 667, year: 1895, genre: "fiction", available: false},
  {id: 7, title: "Ulysses", pages: 761, year: 2002, genre: "fiction", available: false},
  {id: 8, title: "Clean Code", pages: 421, year: 1992, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(distinctGenres([])).toEqual([]);
});

test("all books", () => {
  expect(distinctGenres(BOOKS)).toEqual(["classic","fiction","sci-fi","tech"]);
});
