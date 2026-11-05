SELECT label, minutes
FROM workouts
WHERE minutes > 72
ORDER BY minutes DESC, label;
