---
slug: "node-path-join-4"
title: "Node Drill: path.join and path.resolve #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('..', 'dist', 'lib')\n```","options":["`../dist/lib`","`/dist/lib`","`../dist/lib/`"],"answer":0,"explanation":"Node returns `../dist/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./public', 'users', 'api', 'db')\n```","options":["`/app/public/users/api/db`","`public/users/api/db/`","`app/public/users/api/db`","`./public/users/api/db`"],"answer":0,"explanation":"Node returns `/app/public/users/api/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('utils', '../dist', 'users', 'api')\n```","options":["`app/dist/users/api`","`/app/dist/users/api`","`utils/../dist/users/api`","`dist/users/api/`"],"answer":1,"explanation":"Node returns `/app/dist/users/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', '.', 'api')\n```","options":["`tests/api/`","`/app/tests/api`","`app/tests/api`","`tests/./api`"],"answer":1,"explanation":"Node returns `/app/tests/api`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'tests', 'images', 'db')\n```","options":["`tests/images/db`","`tests/images/db/`","`./tests/images/db`","`/./tests/images/db`"],"answer":0,"explanation":"Node returns `tests/images/db`."}]
---
# Node Drill: path.join and path.resolve #4

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
