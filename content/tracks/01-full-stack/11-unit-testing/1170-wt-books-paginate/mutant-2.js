// mutant: `Math.ceil` became `Math.floor`
const BOOKS = [
  {id: 1, title: "Walden", pages: 703, year: 1927, genre: "sci-fi", available: false},
  {id: 2, title: "Clean Code", pages: 252, year: 1973, genre: "classic", available: false},
  {id: 3, title: "Siddhartha", pages: 561, year: 1830, genre: "fiction", available: true},
  {id: 4, title: "Matilda", pages: 506, year: 1816, genre: "sci-fi", available: true},
  {id: 5, title: "Rebecca", pages: 302, year: 2002, genre: "classic", available: false},
  {id: 6, title: "Ulysses", pages: 316, year: 1970, genre: "sci-fi", available: false},
  {id: 7, title: "Hamlet", pages: 513, year: 1963, genre: "classic", available: false},
  {id: 8, title: "Kindred", pages: 709, year: 1839, genre: "fiction", available: true}
];

function pageOfBooks(books, page, size) {
  const totalPages = Math.floor(books.length / size);
  const items = books.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
