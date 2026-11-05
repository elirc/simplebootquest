SELECT strftime('%Y-%m', created_at) AS month,
       COUNT(*) AS orders,
       SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled
FROM orders
GROUP BY month
ORDER BY month;
