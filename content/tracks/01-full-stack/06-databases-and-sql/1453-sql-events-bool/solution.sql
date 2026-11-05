SELECT format, SUM(CASE WHEN free = 1 THEN 1 ELSE 0 END) AS total
FROM events
GROUP BY format
ORDER BY format;
