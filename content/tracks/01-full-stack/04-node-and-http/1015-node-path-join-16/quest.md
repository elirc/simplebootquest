---
slug: "node-path-join-16"
title: "Node Drill: path.join and path.resolve #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('config', 'images', 'users', './dist')\n```","options":["`config/images/users/dist/`","`/config/images/users/./dist`","`config/images/users/dist`","`config/images/users/./dist`"],"answer":2,"explanation":"Node returns `config/images/users/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', 'config', 'users', 'schema.prisma')\n```","options":["`/app/routes/config/users/schema.prisma`","`app/routes/config/users/schema.prisma`","`routes/config/users/schema.prisma/`","`routes/config/users/schema.prisma`"],"answer":0,"explanation":"Node returns `/app/routes/config/users/schema.prisma`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'schema.prisma', 'dist')\n```","options":["`api/schema.prisma/dist/`","`/api/schema.prisma/dist`","`api/schema.prisma/dist`"],"answer":2,"explanation":"Node returns `api/schema.prisma/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'images', 'tests', '../public')\n```","options":["`lib/images/public`","`/lib/images/tests/public`","`lib/images/tests/../public`","`lib/images/public/`"],"answer":0,"explanation":"Node returns `lib/images/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('.', 'api', 'tests', 'dist')\n```","options":["`/app/api/tests/dist`","`./api/tests/dist`","`api/tests/dist/`","`app/api/tests/dist`"],"answer":0,"explanation":"Node returns `/app/api/tests/dist`."}]
---
# Node Drill: path.join and path.resolve #16

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
