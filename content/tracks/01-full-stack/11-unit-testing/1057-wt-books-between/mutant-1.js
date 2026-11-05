// mutant: boundary: `>=` became `>`
const BOOKS = [
  {id: 1, title: "Dune", pages: 774, year: 1996, genre: "tech", available: true},
  {id: 2, title: "Siddhartha", pages: 691, year: 1846, genre: "classic", available: true},
  {id: 3, title: "Hamlet", pages: 443, year: 1814, genre: "sci-fi", available: true},
  {id: 4, title: "Walden", pages: 333, year: 1941, genre: "classic", available: true},
  {id: 5, title: "Rebecca", pages: 273, year: 1955, genre: "classic", available: false},
  {id: 6, title: "Matilda", pages: 710, year: 1966, genre: "tech", available: false},
  {id: 7, title: "Clean Code", pages: 660, year: 2015, genre: "classic", available: false},
  {id: 8, title: "Emma", pages: 476, year: 1956, genre: "sci-fi", available: false}
];

function booksInRange(books, low, high) {
  return books.filter((x) => x.pages > low && x.pages <= high).map((x) => x.title);
}
