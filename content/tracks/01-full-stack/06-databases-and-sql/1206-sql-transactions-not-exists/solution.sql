SELECT reference
FROM transactions t
WHERE NOT EXISTS (SELECT 1 FROM transaction_events ev WHERE ev.transaction_id = t.id)
ORDER BY reference;
