SELECT code
FROM orders t
WHERE NOT EXISTS (SELECT 1 FROM order_events ev WHERE ev.order_id = t.id)
ORDER BY code;
