---
slug: "node-path-join-83"
title: "Node Drill: path.join and path.resolve #83"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('../tests', 'config', 'db')\n```","options":["`../tests/config/db/`","`../tests/config/db`","`/tests/config/db`"],"answer":1,"explanation":"Node returns `../tests/config/db`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'tests', './lib')\n```","options":["`routes/tests/lib`","`/routes/tests/./lib`","`routes/tests/lib/`","`routes/tests/./lib`"],"answer":0,"explanation":"Node returns `routes/tests/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', './api', 'tests', 'api')\n```","options":["`app/public/api/tests/api`","`/app/public/api/tests/api`","`public/api/tests/api/`","`public/./api/tests/api`"],"answer":1,"explanation":"Node returns `/app/public/api/tests/api`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'db', 'api', '../public')\n```","options":["`users/db/public`","`users/db/public/`","`/users/db/api/public`","`users/db/api/../public`"],"answer":0,"explanation":"Node returns `users/db/public`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'users', 'tests', 'images')\n```","options":["`users/tests/images/`","`/./users/tests/images`","`users/tests/images`","`./users/tests/images`"],"answer":2,"explanation":"Node returns `users/tests/images`."}]
---
# Node Drill: path.join and path.resolve #83

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
