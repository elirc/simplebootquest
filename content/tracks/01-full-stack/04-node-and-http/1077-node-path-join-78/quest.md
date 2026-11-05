---
slug: "node-path-join-78"
title: "Node Drill: path.join and path.resolve #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('config', 'data.json', 'tests', 'api')\n```","options":["`/app/config/data.json/tests/api`","`app/config/data.json/tests/api`","`config/data.json/tests/api/`","`config/data.json/tests/api`"],"answer":0,"explanation":"Node returns `/app/config/data.json/tests/api`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'archive.tar.gz', 'users')\n```","options":["`/config/archive.tar.gz/users`","`config/archive.tar.gz/users/`","`config/archive.tar.gz/users`"],"answer":2,"explanation":"Node returns `config/archive.tar.gz/users`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'dist', 'db', './tests')\n```","options":["`lib/dist/db/tests/`","`lib/dist/db/tests`","`lib/dist/db/./tests`","`/lib/dist/db/./tests`"],"answer":1,"explanation":"Node returns `lib/dist/db/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'dist', '..', 'users')\n```","options":["`public/dist/../users`","`/public/dist/users`","`public/users/`","`public/users`"],"answer":3,"explanation":"Node returns `public/users`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'tests', './images')\n```","options":["`utils/tests/./images`","`utils/tests/images`","`utils/tests/images/`","`/utils/tests/./images`"],"answer":1,"explanation":"Node returns `utils/tests/images`."}]
---
# Node Drill: path.join and path.resolve #78

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
