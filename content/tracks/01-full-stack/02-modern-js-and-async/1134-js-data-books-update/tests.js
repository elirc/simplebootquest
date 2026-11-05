const BOOKS = [
  {id: 1, title: "Matilda", pages: 709, year: 1960, genre: "sci-fi", available: false},
  {id: 2, title: "Dune", pages: 464, year: 1881, genre: "tech", available: true},
  {id: 3, title: "Ulysses", pages: 218, year: 1852, genre: "fiction", available: true},
  {id: 4, title: "Neuromancer", pages: 676, year: 1837, genre: "fiction", available: true},
  {id: 5, title: "Walden", pages: 604, year: 1924, genre: "sci-fi", available: true},
  {id: 6, title: "Siddhartha", pages: 454, year: 1840, genre: "fiction", available: true},
  {id: 7, title: "Kindred", pages: 274, year: 1917, genre: "fiction", available: true},
  {id: 8, title: "Clean Code", pages: 289, year: 1949, genre: "classic", available: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(BOOKS);
  bumpPages(BOOKS, "fiction", 10);
  expect(JSON.stringify(BOOKS)).toBe(before);
});

test("with \"fiction\", 10", () => {
  expect(bumpPages(BOOKS, "fiction", 10)).toEqual([{"id":1,"title":"Matilda","pages":709,"year":1960,"genre":"sci-fi","available":false},{"id":2,"title":"Dune","pages":464,"year":1881,"genre":"tech","available":true},{"id":3,"title":"Ulysses","pages":228,"year":1852,"genre":"fiction","available":true},{"id":4,"title":"Neuromancer","pages":686,"year":1837,"genre":"fiction","available":true},{"id":5,"title":"Walden","pages":604,"year":1924,"genre":"sci-fi","available":true},{"id":6,"title":"Siddhartha","pages":464,"year":1840,"genre":"fiction","available":true},{"id":7,"title":"Kindred","pages":284,"year":1917,"genre":"fiction","available":true},{"id":8,"title":"Clean Code","pages":289,"year":1949,"genre":"classic","available":false}]);
});

test("with \"classic\", 1", () => {
  expect(bumpPages(BOOKS, "classic", 1)).toEqual([{"id":1,"title":"Matilda","pages":709,"year":1960,"genre":"sci-fi","available":false},{"id":2,"title":"Dune","pages":464,"year":1881,"genre":"tech","available":true},{"id":3,"title":"Ulysses","pages":218,"year":1852,"genre":"fiction","available":true},{"id":4,"title":"Neuromancer","pages":676,"year":1837,"genre":"fiction","available":true},{"id":5,"title":"Walden","pages":604,"year":1924,"genre":"sci-fi","available":true},{"id":6,"title":"Siddhartha","pages":454,"year":1840,"genre":"fiction","available":true},{"id":7,"title":"Kindred","pages":274,"year":1917,"genre":"fiction","available":true},{"id":8,"title":"Clean Code","pages":290,"year":1949,"genre":"classic","available":false}]);
});
