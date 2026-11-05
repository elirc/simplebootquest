SELECT o.id AS order_id, c.name AS customer
FROM orders o
JOIN customers c ON c.id = o.customer_id;
