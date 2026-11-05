SELECT title
FROM courses t
WHERE NOT EXISTS (SELECT 1 FROM course_events ev WHERE ev.course_id = t.id)
ORDER BY title;
