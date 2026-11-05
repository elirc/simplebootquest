---
slug: "node-path-join-38"
title: "Node Drill: path.join and path.resolve #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'users', '../config', 'tests')\n```","options":["`public/users/../config/tests`","`/public/users/config/tests`","`public/config/tests`","`public/config/tests/`"],"answer":2,"explanation":"Node returns `public/config/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'lib', 'data.json')\n```","options":["`/app/dist/lib/data.json`","`dist/lib/data.json`","`app/dist/lib/data.json`","`dist/lib/data.json/`"],"answer":0,"explanation":"Node returns `/app/dist/lib/data.json`."},{"prompt":"What does this return?\n\n```js\npath.join('db', '..', 'public', 'routes')\n```","options":["`/db/public/routes`","`db/../public/routes`","`public/routes/`","`public/routes`"],"answer":3,"explanation":"Node returns `public/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'routes', 'lib')\n```","options":["`/./routes/lib`","`routes/lib/`","`routes/lib`","`./routes/lib`"],"answer":2,"explanation":"Node returns `routes/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('images', '../src', 'db')\n```","options":["`app/src/db`","`src/db/`","`images/../src/db`","`/app/src/db`"],"answer":3,"explanation":"Node returns `/app/src/db`."}]
---
# Node Drill: path.join and path.resolve #38

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
