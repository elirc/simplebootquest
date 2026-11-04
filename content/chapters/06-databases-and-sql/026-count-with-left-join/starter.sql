SELECT m.name, COUNT(*) AS loans
FROM members m
JOIN loans l ON l.member_id = m.id
GROUP BY m.id;
