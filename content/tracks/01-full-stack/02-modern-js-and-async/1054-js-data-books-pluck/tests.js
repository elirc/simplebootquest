const BOOKS = [
  {id: 1, title: "Emma", pages: 587, year: 2014, genre: "tech", available: true},
  {id: 2, title: "Kindred", pages: 178, year: 1986, genre: "tech", available: true},
  {id: 3, title: "Clean Code", pages: 687, year: 1876, genre: "classic", available: false},
  {id: 4, title: "Hamlet", pages: 214, year: 2000, genre: "fiction", available: false},
  {id: 5, title: "Matilda", pages: 661, year: 1909, genre: "sci-fi", available: false},
  {id: 6, title: "Dune", pages: 264, year: 1888, genre: "fiction", available: true},
  {id: 7, title: "Ulysses", pages: 670, year: 1928, genre: "classic", available: false},
  {id: 8, title: "Walden", pages: 205, year: 1925, genre: "fiction", available: false}
];

test("an empty list", () => {
  expect(summariseBooks([])).toEqual([]);
});

test("all books", () => {
  expect(summariseBooks(BOOKS)).toEqual([{"id":1,"title":"Emma","pages":587},{"id":2,"title":"Kindred","pages":178},{"id":3,"title":"Clean Code","pages":687},{"id":4,"title":"Hamlet","pages":214},{"id":5,"title":"Matilda","pages":661},{"id":6,"title":"Dune","pages":264},{"id":7,"title":"Ulysses","pages":670},{"id":8,"title":"Walden","pages":205}]);
});
