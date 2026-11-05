SELECT title
FROM courses
WHERE enrolled > (SELECT AVG(enrolled) FROM courses)
ORDER BY title;
