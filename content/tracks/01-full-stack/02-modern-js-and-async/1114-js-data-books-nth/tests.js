const BOOKS = [
  {id: 1, title: "Hamlet", pages: 761, year: 1850, genre: "tech", available: true},
  {id: 2, title: "Emma", pages: 161, year: 1829, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 211, year: 1861, genre: "tech", available: true},
  {id: 4, title: "Dune", pages: 412, year: 1938, genre: "classic", available: false},
  {id: 5, title: "Ulysses", pages: 534, year: 1925, genre: "classic", available: false},
  {id: 6, title: "Neuromancer", pages: 570, year: 1849, genre: "tech", available: true},
  {id: 7, title: "Matilda", pages: 624, year: 2014, genre: "tech", available: false},
  {id: 8, title: "Rebecca", pages: 751, year: 1931, genre: "classic", available: false}
];

test("with 1", () => {
  expect(nthByYear(BOOKS, 1)).toEqual("Matilda");
});

test("with 2", () => {
  expect(nthByYear(BOOKS, 2)).toEqual("Dune");
});

test("with 5", () => {
  expect(nthByYear(BOOKS, 5)).toEqual("Clean Code");
});

test("with 0", () => {
  expect(nthByYear(BOOKS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByYear(BOOKS, 99)).toEqual(null);
});
