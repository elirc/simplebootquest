---
slug: "node-path-join-58"
title: "Node Drill: path.join and path.resolve #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', '../routes', 'dist', 'config')\n```","options":["`src/../routes/dist/config`","`routes/dist/config/`","`app/routes/dist/config`","`/app/routes/dist/config`"],"answer":3,"explanation":"Node returns `/app/routes/dist/config`."},{"prompt":"What does this return?\n\n```js\npath.join('server.mjs', 'dist', 'db')\n```","options":["`server.mjs/dist/db/`","`server.mjs/dist/db`","`/server.mjs/dist/db`"],"answer":1,"explanation":"Node returns `server.mjs/dist/db`."},{"prompt":"What does this return?\n\n```js\npath.join('api', '../src', 'public')\n```","options":["`api/../src/public`","`src/public/`","`src/public`","`/api/src/public`"],"answer":2,"explanation":"Node returns `src/public`."},{"prompt":"What does this return?\n\n```js\npath.join('src', '..', 'api', 'utils')\n```","options":["`api/utils/`","`api/utils`","`src/../api/utils`","`/src/api/utils`"],"answer":1,"explanation":"Node returns `api/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', 'utils', 'users', '.')\n```","options":["`/dist/utils/users/.`","`dist/utils/users/.`","`dist/utils/users/`","`dist/utils/users`"],"answer":3,"explanation":"Node returns `dist/utils/users`."}]
---
# Node Drill: path.join and path.resolve #58

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
