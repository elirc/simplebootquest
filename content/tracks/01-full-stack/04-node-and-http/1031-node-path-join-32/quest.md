---
slug: "node-path-join-32"
title: "Node Drill: path.join and path.resolve #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('routes', 'src', '.', 'users')\n```","options":["`/routes/src/./users`","`routes/src/users`","`routes/src/users/`","`routes/src/./users`"],"answer":1,"explanation":"Node returns `routes/src/users`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'lib', 'public')\n```","options":["`lib/public/`","`lib/public`","`/./lib/public`","`./lib/public`"],"answer":1,"explanation":"Node returns `lib/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../db', 'tests', 'api')\n```","options":["`db/tests/api`","`../db/tests/api`","`../db/tests/api/`","`/db/tests/api`"],"answer":3,"explanation":"Node returns `/db/tests/api`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'public', 'dist')\n```","options":["`/public/dist`","`../public/dist/`","`../public/dist`"],"answer":2,"explanation":"Node returns `../public/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'schema.prisma', 'public')\n```","options":["`config/schema.prisma/public/`","`/config/schema.prisma/public`","`config/schema.prisma/public`"],"answer":2,"explanation":"Node returns `config/schema.prisma/public`."}]
---
# Node Drill: path.join and path.resolve #32

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
