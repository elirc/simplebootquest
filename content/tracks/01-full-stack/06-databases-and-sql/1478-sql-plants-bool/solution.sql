SELECT light, SUM(CASE WHEN pet_safe = 1 THEN 1 ELSE 0 END) AS total
FROM plants
GROUP BY light
ORDER BY light;
