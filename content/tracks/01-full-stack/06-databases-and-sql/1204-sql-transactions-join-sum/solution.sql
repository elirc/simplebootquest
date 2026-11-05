SELECT t.reference, SUM(ev.amount) AS total
FROM transactions t
JOIN transaction_events ev ON ev.transaction_id = t.id
GROUP BY t.id, t.reference
ORDER BY total DESC, t.reference;
