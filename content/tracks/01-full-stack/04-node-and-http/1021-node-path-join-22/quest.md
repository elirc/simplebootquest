---
slug: "node-path-join-22"
title: "Node Drill: path.join and path.resolve #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('lib', 'users', 'images', '.')\n```","options":["`/lib/users/images/.`","`lib/users/images`","`lib/users/images/.`","`lib/users/images/`"],"answer":1,"explanation":"Node returns `lib/users/images`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'users', '..', 'src')\n```","options":["`utils/users/../src`","`/utils/users/src`","`utils/src/`","`utils/src`"],"answer":3,"explanation":"Node returns `utils/src`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'schema.prisma', 'api')\n```","options":["`users/schema.prisma/api/`","`users/schema.prisma/api`","`/users/schema.prisma/api`"],"answer":1,"explanation":"Node returns `users/schema.prisma/api`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'server.mjs', 'src', 'dist')\n```","options":["`public/server.mjs/src/dist/`","`public/server.mjs/src/dist`","`/public/server.mjs/src/dist`"],"answer":1,"explanation":"Node returns `public/server.mjs/src/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('./utils', 'routes', 'db', 'api')\n```","options":["`/./utils/routes/db/api`","`utils/routes/db/api/`","`./utils/routes/db/api`","`utils/routes/db/api`"],"answer":3,"explanation":"Node returns `utils/routes/db/api`."}]
---
# Node Drill: path.join and path.resolve #22

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
