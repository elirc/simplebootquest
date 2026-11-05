SELECT c.name, o.status, COUNT(*) AS n
FROM customers c JOIN orders o ON o.customer_id = c.id
GROUP BY c.name, o.status;
