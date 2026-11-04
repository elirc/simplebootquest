SELECT p.title, COALESCE(GROUP_CONCAT(t.name, ','), '') AS tags
FROM posts p
LEFT JOIN (
  SELECT pt.post_id, tg.name
  FROM post_tags pt
  JOIN tags tg ON tg.id = pt.tag_id
  ORDER BY tg.name
) t ON t.post_id = p.id
GROUP BY p.id, p.title
ORDER BY p.title;
