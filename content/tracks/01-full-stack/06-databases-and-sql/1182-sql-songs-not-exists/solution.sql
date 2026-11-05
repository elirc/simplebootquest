SELECT title
FROM songs t
WHERE NOT EXISTS (SELECT 1 FROM song_events ev WHERE ev.song_id = t.id)
ORDER BY title;
