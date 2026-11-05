const BOOKS = [
  {id: 1, title: "Persuasion", pages: 329, year: 1891, genre: "sci-fi", available: false},
  {id: 2, title: "Dune", pages: 551, year: 1991, genre: "classic", available: true},
  {id: 3, title: "Kindred", pages: 412, year: 1859, genre: "classic", available: false},
  {id: 4, title: "Matilda", pages: 136, year: 1907, genre: "fiction", available: true},
  {id: 5, title: "Neuromancer", pages: 576, year: 1967, genre: "fiction", available: true},
  {id: 6, title: "Siddhartha", pages: 561, year: 1835, genre: "classic", available: true},
  {id: 7, title: "Hamlet", pages: 176, year: 1963, genre: "tech", available: false},
  {id: 8, title: "Ulysses", pages: 695, year: 1899, genre: "classic", available: false}
];

function averageYear(books) {
  if (books.length === 0) return null;
  const total = books.reduce((sum, x) => sum + x.year, 0);
  return Math.round((total / books.length) * 10) / 10;
}
