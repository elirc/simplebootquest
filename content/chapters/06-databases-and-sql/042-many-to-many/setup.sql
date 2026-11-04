CREATE TABLE posts (id INTEGER PRIMARY KEY, title TEXT NOT NULL);
CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE);
CREATE TABLE post_tags (post_id INTEGER NOT NULL REFERENCES posts(id), tag_id INTEGER NOT NULL REFERENCES tags(id), PRIMARY KEY (post_id, tag_id));
INSERT INTO posts VALUES (1, 'Hello SQL'), (2, 'Node Streams'), (3, 'CSS Grid'), (4, 'Untagged');
INSERT INTO tags VALUES (1, 'sql'), (2, 'node'), (3, 'js'), (4, 'css'), (5, 'databases');
INSERT INTO post_tags VALUES (1, 1), (1, 5), (2, 3), (2, 2), (3, 4);
