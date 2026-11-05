SELECT id, name
FROM events
WHERE format IN ('hybrid', 'in-person')
ORDER BY id;
