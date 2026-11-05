SELECT format, ROUND(AVG(registered), 1) AS avg_registered
FROM events
GROUP BY format
ORDER BY format;
