const BOOKS = [
  {id: 1, title: "Rebecca", pages: 477, year: 1907, genre: "classic", available: false},
  {id: 2, title: "Emma", pages: 211, year: 1968, genre: "tech", available: false},
  {id: 3, title: "Ulysses", pages: 179, year: 1972, genre: "classic", available: true},
  {id: 4, title: "Neuromancer", pages: 636, year: 2000, genre: "tech", available: false},
  {id: 5, title: "Matilda", pages: 767, year: 1989, genre: "sci-fi", available: true},
  {id: 6, title: "Walden", pages: 724, year: 1923, genre: "classic", available: true},
  {id: 7, title: "Clean Code", pages: 450, year: 1953, genre: "fiction", available: true},
  {id: 8, title: "Dune", pages: 669, year: 1849, genre: "tech", available: false}
];

test("an empty list", () => {
  expect(averageYearPerGenre([])).toEqual({});
});

test("all books", () => {
  expect(averageYearPerGenre(BOOKS)).toEqual({"classic":1934,"tech":1939,"sci-fi":1989,"fiction":1953});
});
