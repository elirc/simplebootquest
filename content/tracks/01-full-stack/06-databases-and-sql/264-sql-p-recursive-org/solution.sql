WITH RECURSIVE chain(id, depth) AS (
  SELECT id, 0 FROM employees WHERE id = 2
  UNION ALL
  SELECT e.id, c.depth + 1 FROM employees e JOIN chain c ON e.manager_id = c.id
)
SELECT e.name, c.depth
FROM chain c
JOIN employees e ON e.id = c.id
WHERE c.depth > 0
ORDER BY c.depth, e.name;
