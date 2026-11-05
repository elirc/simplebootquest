const BOOKS = [
  {id: 1, title: "Persuasion", pages: 621, year: 1904, genre: "tech", available: true},
  {id: 2, title: "Clean Code", pages: 300, year: 1889, genre: "tech", available: true},
  {id: 3, title: "Matilda", pages: 195, year: 1915, genre: "sci-fi", available: false},
  {id: 4, title: "Ulysses", pages: 576, year: 1843, genre: "tech", available: false},
  {id: 5, title: "Siddhartha", pages: 776, year: 1895, genre: "tech", available: false},
  {id: 6, title: "Kindred", pages: 454, year: 1856, genre: "sci-fi", available: true},
  {id: 7, title: "Emma", pages: 611, year: 1928, genre: "fiction", available: false},
  {id: 8, title: "Neuromancer", pages: 278, year: 1853, genre: "tech", available: false}
];

test("with 1", () => {
  expect(nthByYear(BOOKS, 1)).toEqual("Emma");
});

test("with 2", () => {
  expect(nthByYear(BOOKS, 2)).toEqual("Matilda");
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
