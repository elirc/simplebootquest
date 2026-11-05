SELECT c.name,
       SUM(CASE WHEN o.status = 'pending' THEN 1 ELSE 0 END) AS pending,
       SUM(CASE WHEN o.status = 'paid' THEN 1 ELSE 0 END) AS paid,
       SUM(CASE WHEN o.status = 'shipped' THEN 1 ELSE 0 END) AS shipped,
       SUM(CASE WHEN o.status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY c.name;
