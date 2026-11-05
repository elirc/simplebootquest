---
slug: "node-path-join-84"
title: "Node Drill: path.join and path.resolve #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'src', 'api', 'server.mjs')\n```","options":["`/public/src/api/server.mjs`","`public/src/api/server.mjs`","`public/src/api/server.mjs/`"],"answer":1,"explanation":"Node returns `public/src/api/server.mjs`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'utils', './tests')\n```","options":["`src/utils/tests/`","`src/utils/tests`","`src/utils/./tests`","`/src/utils/./tests`"],"answer":1,"explanation":"Node returns `src/utils/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'users', 'lib', 'src')\n```","options":["`../users/lib/src/`","`../users/lib/src`","`/users/lib/src`"],"answer":1,"explanation":"Node returns `../users/lib/src`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'users', 'db')\n```","options":["`../users/db/`","`/users/db`","`../users/db`"],"answer":2,"explanation":"Node returns `../users/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', 'dist', 'utils', '.')\n```","options":["`lib/dist/utils/`","`lib/dist/utils/.`","`/app/lib/dist/utils`","`app/lib/dist/utils`"],"answer":2,"explanation":"Node returns `/app/lib/dist/utils`."}]
---
# Node Drill: path.join and path.resolve #84

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
