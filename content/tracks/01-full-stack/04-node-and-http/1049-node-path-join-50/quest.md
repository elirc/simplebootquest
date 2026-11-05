---
slug: "node-path-join-50"
title: "Node Drill: path.join and path.resolve #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', 'db', '.')\n```","options":["`/app/lib/db`","`app/lib/db`","`lib/db/.`","`lib/db/`"],"answer":0,"explanation":"Node returns `/app/lib/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', 'lib', 'public', '.')\n```","options":["`src/lib/public/`","`src/lib/public/.`","`app/src/lib/public`","`/app/src/lib/public`"],"answer":3,"explanation":"Node returns `/app/src/lib/public`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'routes', 'src', '.')\n```","options":["`api/routes/src/`","`api/routes/src`","`/api/routes/src/.`","`api/routes/src/.`"],"answer":1,"explanation":"Node returns `api/routes/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./config', 'dist', 'api')\n```","options":["`config/dist/api/`","`/app/config/dist/api`","`./config/dist/api`","`app/config/dist/api`"],"answer":1,"explanation":"Node returns `/app/config/dist/api`."},{"prompt":"What does this return?\n\n```js\npath.join('app.ts', 'images', 'lib')\n```","options":["`app.ts/images/lib`","`/app.ts/images/lib`","`app.ts/images/lib/`"],"answer":0,"explanation":"Node returns `app.ts/images/lib`."}]
---
# Node Drill: path.join and path.resolve #50

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
