---
slug: "node-path-join-87"
title: "Node Drill: path.join and path.resolve #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('data.json', 'api', 'dist', 'lib')\n```","options":["`/data.json/api/dist/lib`","`data.json/api/dist/lib`","`data.json/api/dist/lib/`"],"answer":1,"explanation":"Node returns `data.json/api/dist/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('../tests', 'src', 'lib', 'config')\n```","options":["`/tests/src/lib/config`","`../tests/src/lib/config/`","`../tests/src/lib/config`"],"answer":2,"explanation":"Node returns `../tests/src/lib/config`."},{"prompt":"What does this return?\n\n```js\npath.join('config', '.', 'db')\n```","options":["`/config/./db`","`config/./db`","`config/db`","`config/db/`"],"answer":2,"explanation":"Node returns `config/db`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', '.', 'tests')\n```","options":["`routes/./tests`","`/routes/./tests`","`routes/tests`","`routes/tests/`"],"answer":2,"explanation":"Node returns `routes/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('..', 'users', 'images')\n```","options":["`../users/images`","`users/images`","`/users/images`","`../users/images/`"],"answer":2,"explanation":"Node returns `/users/images`."}]
---
# Node Drill: path.join and path.resolve #87

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
