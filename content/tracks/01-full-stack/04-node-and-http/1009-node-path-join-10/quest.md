---
slug: "node-path-join-10"
title: "Node Drill: path.join and path.resolve #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', 'src', 'dist', 'server.mjs')\n```","options":["`app/routes/src/dist/server.mjs`","`routes/src/dist/server.mjs`","`/app/routes/src/dist/server.mjs`","`routes/src/dist/server.mjs/`"],"answer":2,"explanation":"Node returns `/app/routes/src/dist/server.mjs`."},{"prompt":"What does this return?\n\n```js\npath.join('./images', 'images', 'public')\n```","options":["`images/images/public/`","`/./images/images/public`","`images/images/public`","`./images/images/public`"],"answer":2,"explanation":"Node returns `images/images/public`."},{"prompt":"What does this return?\n\n```js\npath.join('api', '../lib', 'public')\n```","options":["`/api/lib/public`","`lib/public`","`api/../lib/public`","`lib/public/`"],"answer":1,"explanation":"Node returns `lib/public`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'users', 'db', 'dist')\n```","options":["`users/db/dist/`","`/./users/db/dist`","`./users/db/dist`","`users/db/dist`"],"answer":3,"explanation":"Node returns `users/db/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', 'images', '../dist')\n```","options":["`src/dist/`","`app/src/dist`","`src/images/../dist`","`/app/src/dist`"],"answer":3,"explanation":"Node returns `/app/src/dist`."}]
---
# Node Drill: path.join and path.resolve #10

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
