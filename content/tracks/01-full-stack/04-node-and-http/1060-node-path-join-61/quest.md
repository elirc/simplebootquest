---
slug: "node-path-join-61"
title: "Node Drill: path.join and path.resolve #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('app.ts', 'src', 'config', 'db')\n```","options":["`/app.ts/src/config/db`","`app.ts/src/config/db`","`app.ts/src/config/db/`"],"answer":1,"explanation":"Node returns `app.ts/src/config/db`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'logo.png', 'routes')\n```","options":["`api/logo.png/routes/`","`/api/logo.png/routes`","`api/logo.png/routes`"],"answer":2,"explanation":"Node returns `api/logo.png/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('db', '.', 'utils')\n```","options":["`db/utils`","`db/./utils`","`/db/./utils`","`db/utils/`"],"answer":0,"explanation":"Node returns `db/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', './db', 'lib')\n```","options":["`routes/db/lib/`","`/app/routes/db/lib`","`routes/./db/lib`","`app/routes/db/lib`"],"answer":1,"explanation":"Node returns `/app/routes/db/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', 'db', 'data.json')\n```","options":["`/app/tests/db/data.json`","`tests/db/data.json`","`app/tests/db/data.json`","`tests/db/data.json/`"],"answer":0,"explanation":"Node returns `/app/tests/db/data.json`."}]
---
# Node Drill: path.join and path.resolve #61

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
