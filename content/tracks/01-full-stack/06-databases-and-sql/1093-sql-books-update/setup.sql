CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  pages INTEGER NOT NULL,
  year INTEGER NOT NULL,
  genre TEXT NOT NULL,
  available INTEGER NOT NULL
);

INSERT INTO books (id, title, pages, year, genre, available) VALUES
  (1, 'Dune', 184, 1813, 'tech', 0),
  (2, 'Walden', 576, 1908, 'tech', 0),
  (3, 'Clean Code', 582, 1976, 'tech', 0),
  (4, 'Siddhartha', 715, 1817, 'sci-fi', 1),
  (5, 'Kindred', 164, 1850, 'classic', 1),
  (6, 'Persuasion', 491, 1949, 'fiction', 0),
  (7, 'Rebecca', 179, 1844, 'sci-fi', 1),
  (8, 'Ulysses', 454, 1843, 'sci-fi', 0),
  (9, 'Matilda', 242, 1827, 'sci-fi', 0);

CREATE TABLE book_events (
  id INTEGER PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES books(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO book_events (id, book_id, kind, amount, day) VALUES
  (1, 1, 'view', 13, 14),
  (2, 1, 'like', 14, 10),
  (3, 2, 'like', 18, 6),
  (4, 2, 'like', 2, 5),
  (5, 3, 'view', 12, 23),
  (6, 3, 'like', 20, 23),
  (7, 3, 'share', 12, 21),
  (8, 4, 'like', 16, 27),
  (9, 4, 'view', 15, 13),
  (10, 5, 'like', 5, 5),
  (11, 5, 'like', 11, 7),
  (12, 6, 'share', 14, 15),
  (13, 7, 'share', 4, 27),
  (14, 8, 'view', 4, 23),
  (15, 8, 'share', 6, 2),
  (16, 9, 'like', 16, 10),
  (17, 9, 'like', 18, 27);
