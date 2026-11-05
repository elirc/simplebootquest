DELETE FROM movies
WHERE rating < 5
  AND NOT EXISTS (SELECT 1 FROM movie_events ev WHERE ev.movie_id = movies.id);
