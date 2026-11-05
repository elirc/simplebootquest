SELECT t.number,
  SUM(CASE WHEN ev.kind = 'view' THEN 1 ELSE 0 END) AS views,
  SUM(CASE WHEN ev.kind = 'like' THEN 1 ELSE 0 END) AS likes,
  SUM(CASE WHEN ev.kind = 'share' THEN 1 ELSE 0 END) AS shares
FROM flights t
JOIN flight_events ev ON ev.flight_id = t.id
GROUP BY t.id, t.number
ORDER BY t.number;
