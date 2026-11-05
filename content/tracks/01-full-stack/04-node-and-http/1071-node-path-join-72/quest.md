---
slug: "node-path-join-72"
title: "Node Drill: path.join and path.resolve #72"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('utils', 'db', 'src', '../utils')\n```","options":["`utils/db/utils/`","`utils/db/src/../utils`","`/utils/db/src/utils`","`utils/db/utils`"],"answer":3,"explanation":"Node returns `utils/db/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('users', 'images', '../src')\n```","options":["`app/users/src`","`users/src/`","`users/images/../src`","`/app/users/src`"],"answer":3,"explanation":"Node returns `/app/users/src`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'users', '.', 'public')\n```","options":["`utils/users/public`","`utils/users/public/`","`utils/users/./public`","`/utils/users/./public`"],"answer":0,"explanation":"Node returns `utils/users/public`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'routes', '..')\n```","options":["`db/`","`/db/routes/`","`db`","`db/routes/..`"],"answer":2,"explanation":"Node returns `db`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'db', './lib')\n```","options":["`api/db/lib/`","`/api/db/./lib`","`api/db/./lib`","`api/db/lib`"],"answer":3,"explanation":"Node returns `api/db/lib`."}]
---
# Node Drill: path.join and path.resolve #72

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
