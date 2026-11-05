SELECT name
FROM students t
WHERE NOT EXISTS (SELECT 1 FROM student_events ev WHERE ev.student_id = t.id)
ORDER BY name;
