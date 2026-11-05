---
slug: "node-path-join-21"
title: "Node Drill: path.join and path.resolve #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'src', './tests')\n```","options":["`public/src/./tests`","`/public/src/./tests`","`public/src/tests/`","`public/src/tests`"],"answer":3,"explanation":"Node returns `public/src/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', './db', 'users')\n```","options":["`dist/db/users/`","`dist/db/users`","`dist/./db/users`","`/dist/./db/users`"],"answer":1,"explanation":"Node returns `dist/db/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'images', '..', 'public')\n```","options":["`/app/db/public`","`db/public/`","`app/db/public`","`db/images/../public`"],"answer":0,"explanation":"Node returns `/app/db/public`."},{"prompt":"What does this return?\n\n```js\npath.join('schema.prisma', 'api', 'tests', 'users')\n```","options":["`schema.prisma/api/tests/users`","`schema.prisma/api/tests/users/`","`/schema.prisma/api/tests/users`"],"answer":0,"explanation":"Node returns `schema.prisma/api/tests/users`."},{"prompt":"What does this return?\n\n```js\npath.join('logo.png', 'images', 'routes')\n```","options":["`logo.png/images/routes`","`/logo.png/images/routes`","`logo.png/images/routes/`"],"answer":0,"explanation":"Node returns `logo.png/images/routes`."}]
---
# Node Drill: path.join and path.resolve #21

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
