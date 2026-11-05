SELECT light, COUNT(*) AS total
FROM plants
GROUP BY light
ORDER BY total DESC, light;
