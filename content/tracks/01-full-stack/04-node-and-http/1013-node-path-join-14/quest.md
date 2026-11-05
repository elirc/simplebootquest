---
slug: "node-path-join-14"
title: "Node Drill: path.join and path.resolve #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('src', '.', 'db')\n```","options":["`src/db/`","`src/./db`","`/src/./db`","`src/db`"],"answer":3,"explanation":"Node returns `src/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../images', 'routes', 'src')\n```","options":["`/images/routes/src`","`../images/routes/src`","`images/routes/src`","`../images/routes/src/`"],"answer":0,"explanation":"Node returns `/images/routes/src`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'images', './tests')\n```","options":["`/db/images/./tests`","`db/images/./tests`","`db/images/tests/`","`db/images/tests`"],"answer":3,"explanation":"Node returns `db/images/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'db', 'routes', './api')\n```","options":["`images/db/routes/api`","`images/db/routes/api/`","`/images/db/routes/./api`","`images/db/routes/./api`"],"answer":0,"explanation":"Node returns `images/db/routes/api`."},{"prompt":"What does this return?\n\n```js\npath.join('src', '.', 'images')\n```","options":["`src/images/`","`src/images`","`src/./images`","`/src/./images`"],"answer":1,"explanation":"Node returns `src/images`."}]
---
# Node Drill: path.join and path.resolve #14

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
