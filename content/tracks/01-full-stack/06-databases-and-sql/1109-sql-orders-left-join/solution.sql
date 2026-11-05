SELECT t.code, COUNT(ev.id) AS events
FROM orders t
LEFT JOIN order_events ev ON ev.order_id = t.id
GROUP BY t.id, t.code
ORDER BY events DESC, t.code;
