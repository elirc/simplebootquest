SELECT t.name, SUM(ev.amount) AS total
FROM repos t
JOIN repo_events ev ON ev.repo_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
