INSERT INTO repos (id, name, open_issues, stars, language, archived)
VALUES (100, 'New repo', 87, 0, 'Go', 0);

SELECT COUNT(*) AS total FROM repos WHERE language = 'Go';
