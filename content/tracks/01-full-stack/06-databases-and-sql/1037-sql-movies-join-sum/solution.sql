SELECT t.title, SUM(ev.amount) AS total
FROM movies t
JOIN movie_events ev ON ev.movie_id = t.id
GROUP BY t.id, t.title
ORDER BY total DESC, t.title;
