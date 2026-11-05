SELECT id, subject
FROM tickets
WHERE priority IN ('low', 'normal')
ORDER BY id;
