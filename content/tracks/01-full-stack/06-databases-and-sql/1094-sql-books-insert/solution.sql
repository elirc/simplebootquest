INSERT INTO books (id, title, pages, year, genre, available)
VALUES (100, 'New book', 454, 1813, 'classic', 0);

SELECT COUNT(*) AS total FROM books WHERE genre = 'classic';
