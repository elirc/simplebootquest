---
slug: "node-path-join-55"
title: "Node Drill: path.join and path.resolve #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('users', 'index.js', 'routes')\n```","options":["`users/index.js/routes/`","`/users/index.js/routes`","`users/index.js/routes`"],"answer":2,"explanation":"Node returns `users/index.js/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'users', '..')\n```","options":["`routes`","`/routes/users/`","`routes/`","`routes/users/..`"],"answer":0,"explanation":"Node returns `routes`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', 'db', '.', 'lib')\n```","options":["`dist/db/./lib`","`dist/db/lib`","`dist/db/lib/`","`/dist/db/./lib`"],"answer":1,"explanation":"Node returns `dist/db/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'db', 'public', '..')\n```","options":["`src/db`","`/src/db/public/`","`src/db/`","`src/db/public/..`"],"answer":0,"explanation":"Node returns `src/db`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'images', '.env')\n```","options":["`/utils/images/.env`","`utils/images/.env`","`utils/images/.env/`"],"answer":1,"explanation":"Node returns `utils/images/.env`."}]
---
# Node Drill: path.join and path.resolve #55

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
