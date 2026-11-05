---
slug: "node-path-join-26"
title: "Node Drill: path.join and path.resolve #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('lib', 'images', 'dist', './config')\n```","options":["`/lib/images/dist/./config`","`lib/images/dist/config/`","`lib/images/dist/./config`","`lib/images/dist/config`"],"answer":3,"explanation":"Node returns `lib/images/dist/config`."},{"prompt":"What does this return?\n\n```js\npath.join('.env', 'utils', 'tests', 'db')\n```","options":["`.env/utils/tests/db`","`.env/utils/tests/db/`","`/.env/utils/tests/db`"],"answer":0,"explanation":"Node returns `.env/utils/tests/db`."},{"prompt":"What does this return?\n\n```js\npath.join('config', '../routes', 'public', 'api')\n```","options":["`routes/public/api/`","`routes/public/api`","`config/../routes/public/api`","`/config/routes/public/api`"],"answer":1,"explanation":"Node returns `routes/public/api`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'db', 'archive.tar.gz')\n```","options":["`/utils/db/archive.tar.gz`","`utils/db/archive.tar.gz`","`utils/db/archive.tar.gz/`"],"answer":1,"explanation":"Node returns `utils/db/archive.tar.gz`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'src', 'api', '.')\n```","options":["`users/src/api/.`","`users/src/api`","`/users/src/api/.`","`users/src/api/`"],"answer":1,"explanation":"Node returns `users/src/api`."}]
---
# Node Drill: path.join and path.resolve #26

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
