SELECT format, MIN(registered) AS min_registered, MAX(registered) AS max_registered
FROM events
GROUP BY format
ORDER BY format;
