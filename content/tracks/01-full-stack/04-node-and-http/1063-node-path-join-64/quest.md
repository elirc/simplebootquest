---
slug: "node-path-join-64"
title: "Node Drill: path.join and path.resolve #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'users', 'public', '../users')\n```","options":["`db/users/users/`","`/app/db/users/users`","`app/db/users/users`","`db/users/public/../users`"],"answer":1,"explanation":"Node returns `/app/db/users/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('.', 'routes', 'tests')\n```","options":["`./routes/tests`","`app/routes/tests`","`routes/tests/`","`/app/routes/tests`"],"answer":3,"explanation":"Node returns `/app/routes/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../db', 'lib', 'db')\n```","options":["`../db/lib/db/`","`db/lib/db`","`../db/lib/db`","`/db/lib/db`"],"answer":3,"explanation":"Node returns `/db/lib/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../lib', 'config', 'db')\n```","options":["`../lib/config/db`","`lib/config/db`","`/lib/config/db`","`../lib/config/db/`"],"answer":2,"explanation":"Node returns `/lib/config/db`."},{"prompt":"What does this return?\n\n```js\npath.join('app.ts', 'tests', 'users')\n```","options":["`app.ts/tests/users/`","`app.ts/tests/users`","`/app.ts/tests/users`"],"answer":1,"explanation":"Node returns `app.ts/tests/users`."}]
---
# Node Drill: path.join and path.resolve #64

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
