const BOOKS = [
  {id: 1, title: "Emma", pages: 548, year: 1907, genre: "classic", available: false},
  {id: 2, title: "Neuromancer", pages: 442, year: 1906, genre: "fiction", available: true},
  {id: 3, title: "Persuasion", pages: 655, year: 1835, genre: "classic", available: true},
  {id: 4, title: "Ulysses", pages: 768, year: 1912, genre: "tech", available: true},
  {id: 5, title: "Matilda", pages: 228, year: 2000, genre: "sci-fi", available: false},
  {id: 6, title: "Rebecca", pages: 616, year: 1898, genre: "fiction", available: false},
  {id: 7, title: "Hamlet", pages: 674, year: 1840, genre: "tech", available: false},
  {id: 8, title: "Dune", pages: 567, year: 1884, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(averageYear([])).toEqual(null);
});

test("all books", () => {
  expect(averageYear(BOOKS)).toEqual(1897.8);
});
