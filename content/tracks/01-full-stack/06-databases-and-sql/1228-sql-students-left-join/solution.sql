SELECT t.name, COUNT(ev.id) AS events
FROM students t
LEFT JOIN student_events ev ON ev.student_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
