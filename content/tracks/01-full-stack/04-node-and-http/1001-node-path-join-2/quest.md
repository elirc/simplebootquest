---
slug: "node-path-join-2"
title: "Node Drill: path.join and path.resolve #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', 'utils', '../utils')\n```","options":["`src/utils/../utils`","`src/utils/`","`app/src/utils`","`/app/src/utils`"],"answer":3,"explanation":"Node returns `/app/src/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'src', 'dist', '.')\n```","options":["`/app/api/src/dist`","`app/api/src/dist`","`api/src/dist/`","`api/src/dist/.`"],"answer":0,"explanation":"Node returns `/app/api/src/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('..', 'images', 'routes', 'users')\n```","options":["`../images/routes/users/`","`/images/routes/users`","`../images/routes/users`","`images/routes/users`"],"answer":1,"explanation":"Node returns `/images/routes/users`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'lib', '..', 'config')\n```","options":["`db/lib/../config`","`db/config`","`db/config/`","`/db/lib/config`"],"answer":1,"explanation":"Node returns `db/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'db', '../tests', 'api')\n```","options":["`app/dist/tests/api`","`dist/db/../tests/api`","`dist/tests/api/`","`/app/dist/tests/api`"],"answer":3,"explanation":"Node returns `/app/dist/tests/api`."}]
---
# Node Drill: path.join and path.resolve #2

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
