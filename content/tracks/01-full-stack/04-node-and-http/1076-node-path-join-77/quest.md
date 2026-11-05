---
slug: "node-path-join-77"
title: "Node Drill: path.join and path.resolve #77"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('routes', 'db', '..', 'api')\n```","options":["`routes/db/../api`","`routes/api`","`/routes/db/api`","`routes/api/`"],"answer":1,"explanation":"Node returns `routes/api`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'db', './users')\n```","options":["`users/db/users`","`users/db/./users`","`users/db/users/`","`/users/db/./users`"],"answer":0,"explanation":"Node returns `users/db/users`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'routes', '../images')\n```","options":["`tests/images`","`tests/images/`","`tests/routes/../images`","`/tests/routes/images`"],"answer":0,"explanation":"Node returns `tests/images`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', '.', 'public', 'images')\n```","options":["`utils/./public/images`","`/utils/./public/images`","`utils/public/images`","`utils/public/images/`"],"answer":2,"explanation":"Node returns `utils/public/images`."},{"prompt":"What does this return?\n\n```js\npath.join('images', '../db', 'api', 'config')\n```","options":["`images/../db/api/config`","`/images/db/api/config`","`db/api/config/`","`db/api/config`"],"answer":3,"explanation":"Node returns `db/api/config`."}]
---
# Node Drill: path.join and path.resolve #77

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
