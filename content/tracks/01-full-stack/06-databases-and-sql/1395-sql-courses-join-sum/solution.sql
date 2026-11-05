SELECT t.title, SUM(ev.amount) AS total
FROM courses t
JOIN course_events ev ON ev.course_id = t.id
GROUP BY t.id, t.title
ORDER BY total DESC, t.title;
