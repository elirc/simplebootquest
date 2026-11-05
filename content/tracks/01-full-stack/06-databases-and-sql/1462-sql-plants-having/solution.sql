SELECT light, COUNT(*) AS total
FROM plants
GROUP BY light
HAVING COUNT(*) >= 2
ORDER BY light;
