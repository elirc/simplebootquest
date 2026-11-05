// mutant: sorts (mutates) the input array in place
const BOOKS = [
  {id: 1, title: "Clean Code", pages: 733, year: 1976, genre: "fiction", available: false},
  {id: 2, title: "Ulysses", pages: 493, year: 1981, genre: "tech", available: false},
  {id: 3, title: "Neuromancer", pages: 170, year: 1956, genre: "classic", available: true},
  {id: 4, title: "Walden", pages: 571, year: 1841, genre: "fiction", available: true},
  {id: 5, title: "Dune", pages: 371, year: 1895, genre: "sci-fi", available: false},
  {id: 6, title: "Kindred", pages: 220, year: 1909, genre: "fiction", available: true},
  {id: 7, title: "Siddhartha", pages: 232, year: 2013, genre: "tech", available: true},
  {id: 8, title: "Matilda", pages: 734, year: 1911, genre: "fiction", available: false}
];

function booksByPages(books) {
  return books.sort((a, b) => a.pages - b.pages).map((x) => x.title);
}
