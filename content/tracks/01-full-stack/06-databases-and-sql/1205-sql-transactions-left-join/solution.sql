SELECT t.reference, COUNT(ev.id) AS events
FROM transactions t
LEFT JOIN transaction_events ev ON ev.transaction_id = t.id
GROUP BY t.id, t.reference
ORDER BY events DESC, t.reference;
