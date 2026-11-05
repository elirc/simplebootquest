SELECT t.title, COUNT(ev.id) AS events
FROM songs t
LEFT JOIN song_events ev ON ev.song_id = t.id
GROUP BY t.id, t.title
ORDER BY events DESC, t.title;
