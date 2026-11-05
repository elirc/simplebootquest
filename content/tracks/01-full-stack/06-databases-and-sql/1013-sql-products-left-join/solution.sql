SELECT t.name, COUNT(ev.id) AS events
FROM products t
LEFT JOIN product_events ev ON ev.product_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
