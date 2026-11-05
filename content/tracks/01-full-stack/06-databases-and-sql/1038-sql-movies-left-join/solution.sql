SELECT t.title, COUNT(ev.id) AS events
FROM movies t
LEFT JOIN movie_events ev ON ev.movie_id = t.id
GROUP BY t.id, t.title
ORDER BY events DESC, t.title;
