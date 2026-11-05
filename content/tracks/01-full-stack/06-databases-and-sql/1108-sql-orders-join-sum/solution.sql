SELECT t.code, SUM(ev.amount) AS total
FROM orders t
JOIN order_events ev ON ev.order_id = t.id
GROUP BY t.id, t.code
ORDER BY total DESC, t.code;
