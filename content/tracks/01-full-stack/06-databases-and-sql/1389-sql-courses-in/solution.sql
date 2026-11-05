SELECT id, title
FROM courses
WHERE level IN ('advanced', 'beginner')
ORDER BY id;
