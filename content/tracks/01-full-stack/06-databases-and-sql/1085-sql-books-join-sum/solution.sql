SELECT t.title, SUM(ev.amount) AS total
FROM books t
JOIN book_events ev ON ev.book_id = t.id
GROUP BY t.id, t.title
ORDER BY total DESC, t.title;
