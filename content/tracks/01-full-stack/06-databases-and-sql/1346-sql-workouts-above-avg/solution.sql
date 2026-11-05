SELECT label
FROM workouts
WHERE minutes > (SELECT AVG(minutes) FROM workouts)
ORDER BY label;
