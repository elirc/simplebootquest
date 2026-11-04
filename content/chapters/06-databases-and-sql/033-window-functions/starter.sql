SELECT genre, title, MAX(pages) AS pages FROM books GROUP BY genre;
