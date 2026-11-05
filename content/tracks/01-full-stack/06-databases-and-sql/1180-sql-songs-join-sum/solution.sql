SELECT t.title, SUM(ev.amount) AS total
FROM songs t
JOIN song_events ev ON ev.song_id = t.id
GROUP BY t.id, t.title
ORDER BY total DESC, t.title;
