const BOOKS = [
  {id: 1, title: "Ulysses", pages: 585, year: 1853, genre: "tech", available: false},
  {id: 2, title: "Clean Code", pages: 745, year: 1941, genre: "fiction", available: true},
  {id: 3, title: "Hamlet", pages: 653, year: 1823, genre: "tech", available: true},
  {id: 4, title: "Kindred", pages: 271, year: 1929, genre: "fiction", available: true},
  {id: 5, title: "Emma", pages: 779, year: 1968, genre: "fiction", available: false},
  {id: 6, title: "Siddhartha", pages: 648, year: 1952, genre: "classic", available: false},
  {id: 7, title: "Neuromancer", pages: 191, year: 1904, genre: "classic", available: true},
  {id: 8, title: "Persuasion", pages: 303, year: 1892, genre: "tech", available: true}
];

function booksInGenreRanked(books, value) {
  return books
    .filter((x) => x.genre === value)
    .sort((a, b) => b.pages - a.pages)
    .map((x) => x.title);
}
