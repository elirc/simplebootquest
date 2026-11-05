SELECT name
FROM repos t
WHERE NOT EXISTS (SELECT 1 FROM repo_events ev WHERE ev.repo_id = t.id)
ORDER BY name;
