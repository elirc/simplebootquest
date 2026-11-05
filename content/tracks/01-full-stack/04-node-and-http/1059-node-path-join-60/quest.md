---
slug: "node-path-join-60"
title: "Node Drill: path.join and path.resolve #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('users', 'images', './db')\n```","options":["`users/images/db`","`/users/images/./db`","`users/images/db/`","`users/images/./db`"],"answer":0,"explanation":"Node returns `users/images/db`."},{"prompt":"What does this return?\n\n```js\npath.join('db', '../db', 'routes', 'api')\n```","options":["`/db/db/routes/api`","`db/routes/api`","`db/../db/routes/api`","`db/routes/api/`"],"answer":1,"explanation":"Node returns `db/routes/api`."},{"prompt":"What does this return?\n\n```js\npath.join('server.mjs', 'dist', 'public')\n```","options":["`server.mjs/dist/public/`","`server.mjs/dist/public`","`/server.mjs/dist/public`"],"answer":1,"explanation":"Node returns `server.mjs/dist/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('..', 'config', 'public')\n```","options":["`config/public`","`../config/public`","`../config/public/`","`/config/public`"],"answer":3,"explanation":"Node returns `/config/public`."},{"prompt":"What does this return?\n\n```js\npath.join('styles.css', 'src', 'db', 'images')\n```","options":["`/styles.css/src/db/images`","`styles.css/src/db/images/`","`styles.css/src/db/images`"],"answer":2,"explanation":"Node returns `styles.css/src/db/images`."}]
---
# Node Drill: path.join and path.resolve #60

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
