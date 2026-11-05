SELECT title
FROM movies t
WHERE NOT EXISTS (SELECT 1 FROM movie_events ev WHERE ev.movie_id = t.id)
ORDER BY title;
