SELECT title
FROM tasks t
WHERE NOT EXISTS (SELECT 1 FROM task_events ev WHERE ev.task_id = t.id)
ORDER BY title;
