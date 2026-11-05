// mutant: sort direction reversed
const BOOKS = [
  {id: 1, title: "Ulysses", pages: 398, year: 1936, genre: "tech", available: true},
  {id: 2, title: "Persuasion", pages: 475, year: 1947, genre: "classic", available: true},
  {id: 3, title: "Walden", pages: 523, year: 1893, genre: "tech", available: false},
  {id: 4, title: "Emma", pages: 484, year: 1861, genre: "tech", available: false},
  {id: 5, title: "Hamlet", pages: 125, year: 1851, genre: "sci-fi", available: false},
  {id: 6, title: "Clean Code", pages: 395, year: 1991, genre: "sci-fi", available: true},
  {id: 7, title: "Kindred", pages: 760, year: 1857, genre: "fiction", available: false},
  {id: 8, title: "Dune", pages: 502, year: 1868, genre: "sci-fi", available: true}
];

function topBooksByPages(books, n) {
  return [...books].sort((a, b) => a.pages - b.pages).slice(0, n).map((x) => x.title);
}
