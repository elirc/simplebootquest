SELECT t.title, COUNT(ev.id) AS events
FROM tasks t
LEFT JOIN task_events ev ON ev.task_id = t.id
GROUP BY t.id, t.title
ORDER BY events DESC, t.title;
