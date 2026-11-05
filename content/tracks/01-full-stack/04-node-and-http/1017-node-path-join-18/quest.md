---
slug: "node-path-join-18"
title: "Node Drill: path.join and path.resolve #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('.', 'tests', 'lib')\n```","options":["`tests/lib`","`tests/lib/`","`/./tests/lib`","`./tests/lib`"],"answer":0,"explanation":"Node returns `tests/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', './routes', 'api')\n```","options":["`/app/lib/routes/api`","`lib/routes/api/`","`lib/./routes/api`","`app/lib/routes/api`"],"answer":0,"explanation":"Node returns `/app/lib/routes/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', '../dist', 'src', 'lib')\n```","options":["`app/dist/src/lib`","`db/../dist/src/lib`","`/app/dist/src/lib`","`dist/src/lib/`"],"answer":2,"explanation":"Node returns `/app/dist/src/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('./utils', 'images', 'utils', 'lib')\n```","options":["`./utils/images/utils/lib`","`utils/images/utils/lib`","`/./utils/images/utils/lib`","`utils/images/utils/lib/`"],"answer":1,"explanation":"Node returns `utils/images/utils/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'server.mjs', 'config', 'utils')\n```","options":["`api/server.mjs/config/utils`","`app/api/server.mjs/config/utils`","`/app/api/server.mjs/config/utils`","`api/server.mjs/config/utils/`"],"answer":2,"explanation":"Node returns `/app/api/server.mjs/config/utils`."}]
---
# Node Drill: path.join and path.resolve #18

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
