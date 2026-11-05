SELECT name
FROM products
WHERE stock > (SELECT AVG(stock) FROM products)
ORDER BY name;
