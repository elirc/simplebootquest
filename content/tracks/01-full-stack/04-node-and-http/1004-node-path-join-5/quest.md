---
slug: "node-path-join-5"
title: "Node Drill: path.join and path.resolve #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('routes', 'config', '../tests')\n```","options":["`routes/tests/`","`routes/tests`","`/routes/config/tests`","`routes/config/../tests`"],"answer":1,"explanation":"Node returns `routes/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('public', '../routes', 'db', 'tests')\n```","options":["`routes/db/tests/`","`public/../routes/db/tests`","`routes/db/tests`","`/public/routes/db/tests`"],"answer":2,"explanation":"Node returns `routes/db/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'config', '..', 'utils')\n```","options":["`tests/utils/`","`tests/config/../utils`","`tests/utils`","`/tests/config/utils`"],"answer":2,"explanation":"Node returns `tests/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'users', './src', 'dist')\n```","options":["`config/users/src/dist`","`config/users/src/dist/`","`config/users/./src/dist`","`/config/users/./src/dist`"],"answer":0,"explanation":"Node returns `config/users/src/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'app.ts', 'lib')\n```","options":["`api/app.ts/lib`","`app/api/app.ts/lib`","`/app/api/app.ts/lib`","`api/app.ts/lib/`"],"answer":2,"explanation":"Node returns `/app/api/app.ts/lib`."}]
---
# Node Drill: path.join and path.resolve #5

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
