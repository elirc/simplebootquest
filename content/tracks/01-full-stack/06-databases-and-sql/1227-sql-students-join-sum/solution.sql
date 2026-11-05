SELECT t.name, SUM(ev.amount) AS total
FROM students t
JOIN student_events ev ON ev.student_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
