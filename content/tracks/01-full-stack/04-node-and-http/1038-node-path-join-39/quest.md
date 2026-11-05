---
slug: "node-path-join-39"
title: "Node Drill: path.join and path.resolve #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', 'config', 'lib', '.')\n```","options":["`/app/src/config/lib`","`src/config/lib/`","`src/config/lib/.`","`app/src/config/lib`"],"answer":0,"explanation":"Node returns `/app/src/config/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', '..', 'images', 'routes')\n```","options":["`images/routes`","`lib/../images/routes`","`images/routes/`","`/lib/images/routes`"],"answer":0,"explanation":"Node returns `images/routes`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'dist', 'db', 'schema.prisma')\n```","options":["`api/dist/db/schema.prisma`","`/app/api/dist/db/schema.prisma`","`api/dist/db/schema.prisma/`","`app/api/dist/db/schema.prisma`"],"answer":1,"explanation":"Node returns `/app/api/dist/db/schema.prisma`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'routes', 'dist', '.')\n```","options":["`src/routes/dist/.`","`src/routes/dist/`","`/src/routes/dist/.`","`src/routes/dist`"],"answer":3,"explanation":"Node returns `src/routes/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'dist', 'db', 'users')\n```","options":["`dist/db/users`","`/./dist/db/users`","`dist/db/users/`","`./dist/db/users`"],"answer":0,"explanation":"Node returns `dist/db/users`."}]
---
# Node Drill: path.join and path.resolve #39

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
