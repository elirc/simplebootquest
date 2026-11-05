---
slug: "node-path-join-25"
title: "Node Drill: path.join and path.resolve #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('utils', '../images', 'api')\n```","options":["`utils/../images/api`","`/utils/images/api`","`images/api/`","`images/api`"],"answer":3,"explanation":"Node returns `images/api`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'public', 'api', 'config')\n```","options":["`/public/api/config`","`../public/api/config/`","`../public/api/config`"],"answer":2,"explanation":"Node returns `../public/api/config`."},{"prompt":"What does this return?\n\n```js\npath.join('images', '../users', 'tests', 'config')\n```","options":["`images/../users/tests/config`","`users/tests/config`","`/images/users/tests/config`","`users/tests/config/`"],"answer":1,"explanation":"Node returns `users/tests/config`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', '..', 'tests')\n```","options":["`tests`","`tests/`","`routes/../tests`","`/routes/tests`"],"answer":0,"explanation":"Node returns `tests`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'styles.css', 'utils', 'db')\n```","options":["`api/styles.css/utils/db/`","`/api/styles.css/utils/db`","`api/styles.css/utils/db`"],"answer":2,"explanation":"Node returns `api/styles.css/utils/db`."}]
---
# Node Drill: path.join and path.resolve #25

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
