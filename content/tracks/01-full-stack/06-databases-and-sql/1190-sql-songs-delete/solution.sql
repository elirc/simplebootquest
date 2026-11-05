DELETE FROM songs
WHERE seconds < 267
  AND NOT EXISTS (SELECT 1 FROM song_events ev WHERE ev.song_id = songs.id);
