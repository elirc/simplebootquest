SELECT id, model
FROM cars
WHERE fuel IN ('diesel', 'electric')
ORDER BY id;
