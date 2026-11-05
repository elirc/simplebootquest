SELECT t.title, COUNT(ev.id) AS events
FROM courses t
LEFT JOIN course_events ev ON ev.course_id = t.id
GROUP BY t.id, t.title
ORDER BY events DESC, t.title;
