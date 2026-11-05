SELECT name
FROM events
WHERE registered > (SELECT AVG(registered) FROM events)
ORDER BY name;
