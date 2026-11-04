BEGIN;
UPDATE accounts SET balance = balance - 30 WHERE id = 1;
UPDATE accounts SET balance = balance + 30 WHERE id = 2;
COMMIT;

BEGIN;
INSERT INTO audit (note) VALUES ('attempted');
UPDATE accounts SET balance = balance + 500 WHERE id = 1;
ROLLBACK;
