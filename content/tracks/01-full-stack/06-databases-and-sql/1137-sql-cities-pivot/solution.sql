SELECT t.name,
  SUM(CASE WHEN ev.kind = 'view' THEN 1 ELSE 0 END) AS views,
  SUM(CASE WHEN ev.kind = 'like' THEN 1 ELSE 0 END) AS likes,
  SUM(CASE WHEN ev.kind = 'share' THEN 1 ELSE 0 END) AS shares
FROM cities t
JOIN city_events ev ON ev.city_id = t.id
GROUP BY t.id, t.name
ORDER BY t.name;
