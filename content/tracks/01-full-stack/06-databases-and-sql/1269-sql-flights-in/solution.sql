SELECT id, number
FROM flights
WHERE airline IN ('oneworld', 'skyteam')
ORDER BY id;
