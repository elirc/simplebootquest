const BOOKS = [
  {id: 1, title: "Matilda", pages: 769, year: 1872, genre: "classic", available: false},
  {id: 2, title: "Hamlet", pages: 209, year: 1887, genre: "tech", available: false},
  {id: 3, title: "Clean Code", pages: 708, year: 1861, genre: "classic", available: true},
  {id: 4, title: "Siddhartha", pages: 479, year: 2005, genre: "classic", available: false},
  {id: 5, title: "Rebecca", pages: 717, year: 2005, genre: "fiction", available: true},
  {id: 6, title: "Ulysses", pages: 644, year: 1822, genre: "tech", available: false},
  {id: 7, title: "Walden", pages: 543, year: 1881, genre: "classic", available: false},
  {id: 8, title: "Kindred", pages: 606, year: 1998, genre: "sci-fi", available: false}
];

test("an empty list", () => {
  expect(summariseBooks([])).toEqual([]);
});

test("all books", () => {
  expect(summariseBooks(BOOKS)).toEqual([{"id":1,"title":"Matilda","year":1872},{"id":2,"title":"Hamlet","year":1887},{"id":3,"title":"Clean Code","year":1861},{"id":4,"title":"Siddhartha","year":2005},{"id":5,"title":"Rebecca","year":2005},{"id":6,"title":"Ulysses","year":1822},{"id":7,"title":"Walden","year":1881},{"id":8,"title":"Kindred","year":1998}]);
});
