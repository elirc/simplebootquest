// mutant: condition negated: `===` became `!==`
const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 574, year: 1893, genre: "tech", available: true},
  {id: 2, title: "Walden", pages: 694, year: 1973, genre: "fiction", available: false},
  {id: 3, title: "Kindred", pages: 488, year: 1819, genre: "sci-fi", available: true},
  {id: 4, title: "Ulysses", pages: 675, year: 1823, genre: "sci-fi", available: true},
  {id: 5, title: "Neuromancer", pages: 465, year: 1925, genre: "classic", available: true},
  {id: 6, title: "Matilda", pages: 541, year: 1847, genre: "fiction", available: true},
  {id: 7, title: "Rebecca", pages: 451, year: 1902, genre: "sci-fi", available: false},
  {id: 8, title: "Persuasion", pages: 586, year: 1929, genre: "classic", available: false}
];

function percentAvailable(books) {
  if (books.length !== 0) return 0;
  return Math.round((books.filter((x) => x.available).length / books.length) * 100);
}
