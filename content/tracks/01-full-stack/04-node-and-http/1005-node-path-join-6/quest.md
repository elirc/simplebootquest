---
slug: "node-path-join-6"
title: "Node Drill: path.join and path.resolve #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', '../lib', 'tests')\n```","options":["`lib/tests/`","`public/../lib/tests`","`/public/lib/tests`","`lib/tests`"],"answer":3,"explanation":"Node returns `lib/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'lib', 'routes', '.')\n```","options":["`src/lib/routes`","`src/lib/routes/`","`src/lib/routes/.`","`/src/lib/routes/.`"],"answer":0,"explanation":"Node returns `src/lib/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', '.', 'config', 'utils')\n```","options":["`routes/./config/utils`","`routes/config/utils`","`/routes/./config/utils`","`routes/config/utils/`"],"answer":1,"explanation":"Node returns `routes/config/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', './db', 'db')\n```","options":["`app/tests/db/db`","`tests/db/db/`","`tests/./db/db`","`/app/tests/db/db`"],"answer":3,"explanation":"Node returns `/app/tests/db/db`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'db', 'api', 'data.json')\n```","options":["`lib/db/api/data.json`","`lib/db/api/data.json/`","`/lib/db/api/data.json`"],"answer":0,"explanation":"Node returns `lib/db/api/data.json`."}]
---
# Node Drill: path.join and path.resolve #6

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
