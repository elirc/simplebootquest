const BOOKS = [
  {id: 1, title: "Emma", pages: 276, year: 1839, genre: "tech", available: false},
  {id: 2, title: "Siddhartha", pages: 554, year: 2004, genre: "tech", available: true},
  {id: 3, title: "Rebecca", pages: 755, year: 1841, genre: "sci-fi", available: true},
  {id: 4, title: "Neuromancer", pages: 556, year: 1842, genre: "sci-fi", available: false},
  {id: 5, title: "Matilda", pages: 585, year: 1946, genre: "tech", available: false},
  {id: 6, title: "Dune", pages: 339, year: 1887, genre: "tech", available: true},
  {id: 7, title: "Hamlet", pages: 271, year: 1961, genre: "tech", available: true},
  {id: 8, title: "Ulysses", pages: 144, year: 1949, genre: "classic", available: false}
];

test("an empty list", () => {
  expect(describeBooks([])).toEqual([]);
});

test("all books", () => {
  expect(describeBooks(BOOKS)).toEqual(["Emma (276)","Siddhartha (554)","Rebecca (755)","Neuromancer (556)","Matilda (585)","Dune (339)","Hamlet (271)","Ulysses (144)"]);
});
