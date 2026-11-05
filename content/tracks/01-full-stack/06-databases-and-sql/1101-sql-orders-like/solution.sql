SELECT code
FROM orders
WHERE code LIKE '%-2%'
ORDER BY code;
