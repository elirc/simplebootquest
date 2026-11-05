INSERT INTO transactions (id, reference, amount, day, category)
VALUES (100, 'New transaction', 648, 1, 'fun');

SELECT COUNT(*) AS total FROM transactions WHERE category = 'fun';
