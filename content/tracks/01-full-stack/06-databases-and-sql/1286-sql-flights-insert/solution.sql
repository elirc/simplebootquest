INSERT INTO flights (id, number, duration_min, delay_min, seats, airline)
VALUES (100, 'New flight', 459, 0, 0, 'oneworld');

SELECT COUNT(*) AS total FROM flights WHERE airline = 'oneworld';
