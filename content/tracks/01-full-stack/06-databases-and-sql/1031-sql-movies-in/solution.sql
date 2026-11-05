SELECT id, title
FROM movies
WHERE genre IN ('sci-fi', 'thriller')
ORDER BY id;
