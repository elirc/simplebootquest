SELECT COALESCE(city, 'Unknown') AS city, COUNT(*) AS customers
FROM customers
GROUP BY COALESCE(city, 'Unknown')
ORDER BY customers DESC, city;
