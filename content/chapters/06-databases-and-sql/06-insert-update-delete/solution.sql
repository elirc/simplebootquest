INSERT INTO members (name, email) VALUES ('Margaret', 'margaret@example.com');

UPDATE loans SET returned_on = '2026-03-01' WHERE id = 2;

DELETE FROM loans WHERE returned_on IS NOT NULL AND returned_on < '2026-02-01';
