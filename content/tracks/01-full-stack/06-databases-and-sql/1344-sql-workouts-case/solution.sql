SELECT label,
  CASE WHEN minutes >= 98 THEN 'high' WHEN minutes < 25 THEN 'low' ELSE 'medium' END AS band
FROM workouts
ORDER BY label;
