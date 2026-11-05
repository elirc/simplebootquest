const BOOKS = [
  {id: 1, title: "Kindred", pages: 620, year: 1981, genre: "sci-fi", available: true},
  {id: 2, title: "Ulysses", pages: 664, year: 2004, genre: "classic", available: false},
  {id: 3, title: "Hamlet", pages: 538, year: 1836, genre: "fiction", available: false},
  {id: 4, title: "Neuromancer", pages: 618, year: 1878, genre: "tech", available: true},
  {id: 5, title: "Dune", pages: 628, year: 1948, genre: "classic", available: true},
  {id: 6, title: "Rebecca", pages: 599, year: 1916, genre: "fiction", available: true},
  {id: 7, title: "Emma", pages: 777, year: 1881, genre: "sci-fi", available: false},
  {id: 8, title: "Siddhartha", pages: 298, year: 1964, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(totalPages([])).toEqual(0);
});

test("all books", () => {
  expect(totalPages(BOOKS)).toEqual(4742);
});
