SELECT id, name
FROM repos
WHERE language IN ('Go', 'Python')
ORDER BY id;
