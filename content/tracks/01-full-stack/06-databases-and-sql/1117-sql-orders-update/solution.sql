UPDATE orders
SET total_cents = total_cents + 10
WHERE status = 'cancelled';
