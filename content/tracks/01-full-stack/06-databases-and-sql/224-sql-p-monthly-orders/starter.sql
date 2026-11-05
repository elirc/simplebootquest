SELECT created_at AS month, COUNT(*) AS orders FROM orders GROUP BY created_at;
