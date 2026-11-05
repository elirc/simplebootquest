UPDATE orders
SET status = 'cancelled'
WHERE status = 'pending' AND created_at < '2026-02-10';
