SELECT t.title, COUNT(ev.id) AS events
FROM books t
LEFT JOIN book_events ev ON ev.book_id = t.id
GROUP BY t.id, t.title
ORDER BY events DESC, t.title;
