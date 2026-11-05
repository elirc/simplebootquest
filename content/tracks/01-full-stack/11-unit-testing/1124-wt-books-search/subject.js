const BOOKS = [
  {id: 1, title: "Kindred", pages: 291, year: 1898, genre: "sci-fi", available: false},
  {id: 2, title: "Persuasion", pages: 604, year: 1934, genre: "sci-fi", available: false},
  {id: 3, title: "Neuromancer", pages: 227, year: 1840, genre: "sci-fi", available: false},
  {id: 4, title: "Dune", pages: 240, year: 1883, genre: "tech", available: false},
  {id: 5, title: "Emma", pages: 491, year: 1937, genre: "classic", available: false},
  {id: 6, title: "Hamlet", pages: 303, year: 1848, genre: "tech", available: false},
  {id: 7, title: "Ulysses", pages: 353, year: 1978, genre: "classic", available: false},
  {id: 8, title: "Rebecca", pages: 408, year: 1905, genre: "tech", available: false}
];

function searchBooks(books, query) {
  const q = query.trim().toLowerCase();
  return books.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
