SELECT category, name, stock,
  RANK() OVER (PARTITION BY category ORDER BY stock DESC) AS rank
FROM products
ORDER BY category, rank, name;
