SELECT t.name, SUM(ev.amount) AS total
FROM products t
JOIN product_events ev ON ev.product_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
