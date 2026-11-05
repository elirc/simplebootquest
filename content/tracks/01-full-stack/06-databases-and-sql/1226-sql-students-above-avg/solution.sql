SELECT name
FROM students
WHERE age > (SELECT AVG(age) FROM students)
ORDER BY name;
