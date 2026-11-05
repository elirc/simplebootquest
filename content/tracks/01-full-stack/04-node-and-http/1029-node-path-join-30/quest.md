---
slug: "node-path-join-30"
title: "Node Drill: path.join and path.resolve #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./api', 'lib', 'tests', 'db')\n```","options":["`app/api/lib/tests/db`","`/app/api/lib/tests/db`","`api/lib/tests/db/`","`./api/lib/tests/db`"],"answer":1,"explanation":"Node returns `/app/api/lib/tests/db`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'lib', '..')\n```","options":["`/db/lib/`","`db`","`db/`","`db/lib/..`"],"answer":1,"explanation":"Node returns `db`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', '../routes', 'config')\n```","options":["`routes/config`","`routes/config/`","`utils/../routes/config`","`/utils/routes/config`"],"answer":0,"explanation":"Node returns `routes/config`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'index.js', 'routes')\n```","options":["`public/index.js/routes`","`public/index.js/routes/`","`/public/index.js/routes`"],"answer":0,"explanation":"Node returns `public/index.js/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('./config', 'db', 'lib', 'tests')\n```","options":["`config/db/lib/tests/`","`./config/db/lib/tests`","`config/db/lib/tests`","`/./config/db/lib/tests`"],"answer":2,"explanation":"Node returns `config/db/lib/tests`."}]
---
# Node Drill: path.join and path.resolve #30

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
