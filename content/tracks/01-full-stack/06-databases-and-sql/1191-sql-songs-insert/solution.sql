INSERT INTO songs (id, title, seconds, plays, artist, mood)
VALUES (100, 'New song', 351, 10, 'Kairo', 'calm');

SELECT COUNT(*) AS total FROM songs WHERE artist = 'Kairo';
