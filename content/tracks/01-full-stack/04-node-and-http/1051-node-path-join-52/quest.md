---
slug: "node-path-join-52"
title: "Node Drill: path.join and path.resolve #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('src', 'images', 'routes', './config')\n```","options":["`/src/images/routes/./config`","`src/images/routes/config`","`src/images/routes/config/`","`src/images/routes/./config`"],"answer":1,"explanation":"Node returns `src/images/routes/config`."},{"prompt":"What does this return?\n\n```js\npath.join('public', '../routes', 'lib')\n```","options":["`routes/lib/`","`/public/routes/lib`","`public/../routes/lib`","`routes/lib`"],"answer":3,"explanation":"Node returns `routes/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'db', '.', 'lib')\n```","options":["`images/db/lib`","`/images/db/./lib`","`images/db/lib/`","`images/db/./lib`"],"answer":0,"explanation":"Node returns `images/db/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('utils', 'src', '..', 'users')\n```","options":["`app/utils/users`","`utils/users/`","`utils/src/../users`","`/app/utils/users`"],"answer":3,"explanation":"Node returns `/app/utils/users`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'lib', 'routes', './api')\n```","options":["`tests/lib/routes/api/`","`tests/lib/routes/./api`","`/tests/lib/routes/./api`","`tests/lib/routes/api`"],"answer":3,"explanation":"Node returns `tests/lib/routes/api`."}]
---
# Node Drill: path.join and path.resolve #52

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
