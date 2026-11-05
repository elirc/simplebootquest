---
slug: "node-path-join-7"
title: "Node Drill: path.join and path.resolve #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('config', './db', 'api')\n```","options":["`config/db/api/`","`config/./db/api`","`/config/./db/api`","`config/db/api`"],"answer":3,"explanation":"Node returns `config/db/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', './src', 'db')\n```","options":["`app/lib/src/db`","`lib/src/db/`","`lib/./src/db`","`/app/lib/src/db`"],"answer":3,"explanation":"Node returns `/app/lib/src/db`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'tests', 'lib', '../src')\n```","options":["`users/tests/src`","`users/tests/src/`","`users/tests/lib/../src`","`/users/tests/lib/src`"],"answer":0,"explanation":"Node returns `users/tests/src`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'db', 'tests', 'public')\n```","options":["`/db/tests/public`","`../db/tests/public`","`../db/tests/public/`"],"answer":1,"explanation":"Node returns `../db/tests/public`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'tests', 'src', 'logo.png')\n```","options":["`utils/tests/src/logo.png/`","`utils/tests/src/logo.png`","`/utils/tests/src/logo.png`"],"answer":1,"explanation":"Node returns `utils/tests/src/logo.png`."}]
---
# Node Drill: path.join and path.resolve #7

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
