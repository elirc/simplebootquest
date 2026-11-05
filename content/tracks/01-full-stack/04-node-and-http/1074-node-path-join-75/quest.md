---
slug: "node-path-join-75"
title: "Node Drill: path.join and path.resolve #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('server.mjs', 'tests', 'api', 'routes')\n```","options":["`server.mjs/tests/api/routes/`","`app/server.mjs/tests/api/routes`","`/app/server.mjs/tests/api/routes`","`server.mjs/tests/api/routes`"],"answer":2,"explanation":"Node returns `/app/server.mjs/tests/api/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'utils', 'logo.png', 'tests')\n```","options":["`config/utils/logo.png/tests`","`/config/utils/logo.png/tests`","`config/utils/logo.png/tests/`"],"answer":0,"explanation":"Node returns `config/utils/logo.png/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('./api', 'db', 'utils')\n```","options":["`api/db/utils`","`./api/db/utils`","`/./api/db/utils`","`api/db/utils/`"],"answer":0,"explanation":"Node returns `api/db/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'dist', 'config', '..')\n```","options":["`public/dist`","`/public/dist/config/`","`public/dist/`","`public/dist/config/..`"],"answer":0,"explanation":"Node returns `public/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'src', 'images', '..')\n```","options":["`db/src/images/..`","`db/src/`","`/app/db/src`","`app/db/src`"],"answer":2,"explanation":"Node returns `/app/db/src`."}]
---
# Node Drill: path.join and path.resolve #75

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
