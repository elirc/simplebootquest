SELECT t.title, SUM(ev.amount) AS total
FROM tasks t
JOIN task_events ev ON ev.task_id = t.id
GROUP BY t.id, t.title
ORDER BY total DESC, t.title;
