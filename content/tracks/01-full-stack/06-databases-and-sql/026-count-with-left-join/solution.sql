SELECT m.name, COUNT(l.id) AS loans
FROM members m
LEFT JOIN loans l ON l.member_id = m.id
GROUP BY m.id, m.name
ORDER BY loans DESC, m.name;
