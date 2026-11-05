SELECT t.name, COUNT(ev.id) AS events
FROM repos t
LEFT JOIN repo_events ev ON ev.repo_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
