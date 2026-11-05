---
slug: "node-path-join-59"
title: "Node Drill: path.join and path.resolve #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', '.', 'lib')\n```","options":["`/app/routes/lib`","`app/routes/lib`","`routes/./lib`","`routes/lib/`"],"answer":0,"explanation":"Node returns `/app/routes/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', 'users', '../db')\n```","options":["`routes/users/../db`","`routes/db/`","`/app/routes/db`","`app/routes/db`"],"answer":2,"explanation":"Node returns `/app/routes/db`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', '../tests', 'routes')\n```","options":["`tests/routes`","`/lib/tests/routes`","`tests/routes/`","`lib/../tests/routes`"],"answer":0,"explanation":"Node returns `tests/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'api', 'public')\n```","options":["`/./api/public`","`api/public`","`api/public/`","`./api/public`"],"answer":1,"explanation":"Node returns `api/public`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'lib', 'routes', '.')\n```","options":["`tests/lib/routes/.`","`tests/lib/routes/`","`/tests/lib/routes/.`","`tests/lib/routes`"],"answer":3,"explanation":"Node returns `tests/lib/routes`."}]
---
# Node Drill: path.join and path.resolve #59

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
