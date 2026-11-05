SELECT label
FROM workouts
WHERE minutes BETWEEN 25 AND 98
ORDER BY minutes, label;
