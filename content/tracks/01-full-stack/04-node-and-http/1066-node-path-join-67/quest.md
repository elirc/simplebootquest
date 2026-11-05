---
slug: "node-path-join-67"
title: "Node Drill: path.join and path.resolve #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('utils', 'db', 'app.ts', 'images')\n```","options":["`utils/db/app.ts/images/`","`app/utils/db/app.ts/images`","`utils/db/app.ts/images`","`/app/utils/db/app.ts/images`"],"answer":3,"explanation":"Node returns `/app/utils/db/app.ts/images`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', '.', 'api', 'config')\n```","options":["`/utils/./api/config`","`utils/./api/config`","`utils/api/config/`","`utils/api/config`"],"answer":3,"explanation":"Node returns `utils/api/config`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'src', './api', 'db')\n```","options":["`utils/src/api/db`","`/utils/src/./api/db`","`utils/src/api/db/`","`utils/src/./api/db`"],"answer":0,"explanation":"Node returns `utils/src/api/db`."},{"prompt":"What does this return?\n\n```js\npath.join('server.mjs', 'lib', 'public')\n```","options":["`/server.mjs/lib/public`","`server.mjs/lib/public`","`server.mjs/lib/public/`"],"answer":1,"explanation":"Node returns `server.mjs/lib/public`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'src', '.')\n```","options":["`db/src`","`db/src/.`","`db/src/`","`/db/src/.`"],"answer":0,"explanation":"Node returns `db/src`."}]
---
# Node Drill: path.join and path.resolve #67

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
