INSERT INTO events (id, name, registered, capacity, format, free)
VALUES (100, 'New event', 138, 20, 'hybrid', 0);

SELECT COUNT(*) AS total FROM events WHERE format = 'hybrid';
