DELETE FROM tasks
WHERE estimate < 3
  AND NOT EXISTS (SELECT 1 FROM task_events ev WHERE ev.task_id = tasks.id);
