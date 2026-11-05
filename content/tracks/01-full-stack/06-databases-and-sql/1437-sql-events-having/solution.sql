SELECT format, COUNT(*) AS total
FROM events
GROUP BY format
HAVING COUNT(*) >= 2
ORDER BY format;
