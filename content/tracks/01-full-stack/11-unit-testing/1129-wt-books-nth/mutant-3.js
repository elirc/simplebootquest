// mutant: off-by-one in the index
const BOOKS = [
  {id: 1, title: "Emma", pages: 747, year: 1940, genre: "fiction", available: true},
  {id: 2, title: "Hamlet", pages: 163, year: 1955, genre: "classic", available: true},
  {id: 3, title: "Neuromancer", pages: 347, year: 1815, genre: "sci-fi", available: true},
  {id: 4, title: "Matilda", pages: 338, year: 2011, genre: "tech", available: true},
  {id: 5, title: "Siddhartha", pages: 624, year: 1906, genre: "classic", available: false},
  {id: 6, title: "Rebecca", pages: 402, year: 2009, genre: "sci-fi", available: true},
  {id: 7, title: "Kindred", pages: 496, year: 2013, genre: "classic", available: false},
  {id: 8, title: "Walden", pages: 126, year: 1892, genre: "fiction", available: false}
];

function nthByPages(books, n) {
  const sorted = [...books].sort((a, b) => b.pages - a.pages);
  return n >= 1 && n <= sorted.length ? sorted[n].title : null;
}
