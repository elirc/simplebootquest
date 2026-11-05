SELECT format, COUNT(*) AS total
FROM events
GROUP BY format
ORDER BY total DESC, format;
