CREATE TABLE authors (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  author_id INTEGER NOT NULL REFERENCES authors(id),
  year INTEGER NOT NULL,
  genre TEXT NOT NULL,
  pages INTEGER NOT NULL
);

CREATE TABLE members (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE loans (
  id INTEGER PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES books(id),
  member_id INTEGER NOT NULL REFERENCES members(id),
  borrowed_on TEXT NOT NULL,
  returned_on TEXT
);

INSERT INTO authors (id, name, country) VALUES
  (1, 'Ursula K. Le Guin', 'USA'),
  (2, 'Octavia E. Butler', 'USA'),
  (3, 'Terry Pratchett', 'UK'),
  (4, 'Haruki Murakami', 'Japan'),
  (5, 'Chimamanda Ngozi Adichie', 'Nigeria');

INSERT INTO books (id, title, author_id, year, genre, pages) VALUES
  (1, 'A Wizard of Earthsea', 1, 1968, 'fantasy', 183),
  (2, 'The Left Hand of Darkness', 1, 1969, 'sci-fi', 286),
  (3, 'The Dispossessed', 1, 1974, 'sci-fi', 387),
  (4, 'Kindred', 2, 1979, 'sci-fi', 264),
  (5, 'Parable of the Sower', 2, 1993, 'sci-fi', 345),
  (6, 'Guards! Guards!', 3, 1989, 'fantasy', 416),
  (7, 'Small Gods', 3, 1992, 'fantasy', 400),
  (8, 'Going Postal', 3, 2004, 'fantasy', 394),
  (9, 'Norwegian Wood', 4, 1987, 'literary', 296),
  (10, 'Kafka on the Shore', 4, 2002, 'literary', 505),
  (11, 'Americanah', 5, 2013, 'literary', 588);

INSERT INTO members (id, name, email) VALUES
  (1, 'Ada', 'ada@example.com'),
  (2, 'Grace', 'grace@example.com'),
  (3, 'Linus', 'linus@example.com');

INSERT INTO loans (id, book_id, member_id, borrowed_on, returned_on) VALUES
  (1, 1, 1, '2026-01-02', '2026-01-20'),
  (2, 4, 1, '2026-02-01', NULL),
  (3, 6, 2, '2026-01-15', '2026-01-30'),
  (4, 6, 3, '2026-02-05', NULL),
  (5, 11, 2, '2026-02-10', NULL),
  (6, 7, 1, '2026-02-12', NULL);
