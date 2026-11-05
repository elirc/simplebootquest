SELECT id, stock,
  SUM(stock) OVER (ORDER BY id) AS running_total
FROM products
ORDER BY id;
