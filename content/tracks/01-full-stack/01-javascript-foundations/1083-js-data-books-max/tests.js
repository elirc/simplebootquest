const BOOKS = [
  {id: 1, title: "Clean Code", pages: 151, year: 2001, genre: "fiction", available: false},
  {id: 2, title: "Emma", pages: 337, year: 1831, genre: "fiction", available: true},
  {id: 3, title: "Persuasion", pages: 555, year: 1949, genre: "classic", available: false},
  {id: 4, title: "Siddhartha", pages: 125, year: 1932, genre: "sci-fi", available: false},
  {id: 5, title: "Kindred", pages: 139, year: 1834, genre: "fiction", available: false},
  {id: 6, title: "Matilda", pages: 473, year: 1826, genre: "fiction", available: true},
  {id: 7, title: "Ulysses", pages: 752, year: 1836, genre: "fiction", available: false},
  {id: 8, title: "Neuromancer", pages: 691, year: 1868, genre: "fiction", available: false}
];

test("an empty list", () => {
  expect(highestPages([])).toEqual(null);
});

test("all books", () => {
  expect(highestPages(BOOKS)).toEqual("Ulysses");
});
