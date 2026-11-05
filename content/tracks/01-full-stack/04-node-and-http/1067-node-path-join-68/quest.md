---
slug: "node-path-join-68"
title: "Node Drill: path.join and path.resolve #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('db', '.', 'src')\n```","options":["`db/src/`","`db/./src`","`db/src`","`/db/./src`"],"answer":2,"explanation":"Node returns `db/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', 'api', 'lib', '..')\n```","options":["`public/api/`","`public/api/lib/..`","`app/public/api`","`/app/public/api`"],"answer":3,"explanation":"Node returns `/app/public/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('users', 'public', 'db', 'app.ts')\n```","options":["`app/users/public/db/app.ts`","`/app/users/public/db/app.ts`","`users/public/db/app.ts`","`users/public/db/app.ts/`"],"answer":1,"explanation":"Node returns `/app/users/public/db/app.ts`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('users', './tests', 'src', 'db')\n```","options":["`users/./tests/src/db`","`app/users/tests/src/db`","`users/tests/src/db/`","`/app/users/tests/src/db`"],"answer":3,"explanation":"Node returns `/app/users/tests/src/db`."},{"prompt":"What does this return?\n\n```js\npath.join('images', '../lib', 'db', 'utils')\n```","options":["`lib/db/utils/`","`images/../lib/db/utils`","`lib/db/utils`","`/images/lib/db/utils`"],"answer":2,"explanation":"Node returns `lib/db/utils`."}]
---
# Node Drill: path.join and path.resolve #68

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
