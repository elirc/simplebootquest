---
slug: "node-path-join-41"
title: "Node Drill: path.join and path.resolve #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('db', 'config', '..')\n```","options":["`/db/config/`","`db/`","`db`","`db/config/..`"],"answer":2,"explanation":"Node returns `db`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'public', 'users', '.')\n```","options":["`/utils/public/users/.`","`utils/public/users/.`","`utils/public/users`","`utils/public/users/`"],"answer":2,"explanation":"Node returns `utils/public/users`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'data.json', 'routes')\n```","options":["`/config/data.json/routes`","`config/data.json/routes`","`config/data.json/routes/`"],"answer":1,"explanation":"Node returns `config/data.json/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', '.', 'db', 'utils')\n```","options":["`dist/./db/utils`","`dist/db/utils/`","`dist/db/utils`","`/dist/./db/utils`"],"answer":2,"explanation":"Node returns `dist/db/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', 'routes', './config')\n```","options":["`/app/lib/routes/config`","`lib/routes/./config`","`app/lib/routes/config`","`lib/routes/config/`"],"answer":0,"explanation":"Node returns `/app/lib/routes/config`."}]
---
# Node Drill: path.join and path.resolve #41

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
