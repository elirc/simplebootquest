---
slug: "node-path-join-34"
title: "Node Drill: path.join and path.resolve #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('routes', 'utils', './users')\n```","options":["`routes/utils/users`","`routes/utils/./users`","`/routes/utils/./users`","`routes/utils/users/`"],"answer":0,"explanation":"Node returns `routes/utils/users`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', '..', 'images')\n```","options":["`/lib/images`","`lib/../images`","`images/`","`images`"],"answer":3,"explanation":"Node returns `images`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'images', '.', 'routes')\n```","options":["`/public/images/./routes`","`public/images/routes/`","`public/images/routes`","`public/images/./routes`"],"answer":2,"explanation":"Node returns `public/images/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', './api', 'routes', 'src')\n```","options":["`tests/./api/routes/src`","`/tests/./api/routes/src`","`tests/api/routes/src`","`tests/api/routes/src/`"],"answer":2,"explanation":"Node returns `tests/api/routes/src`."},{"prompt":"What does this return?\n\n```js\npath.join('images', '../db', 'lib', 'src')\n```","options":["`db/lib/src`","`images/../db/lib/src`","`db/lib/src/`","`/images/db/lib/src`"],"answer":0,"explanation":"Node returns `db/lib/src`."}]
---
# Node Drill: path.join and path.resolve #34

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
