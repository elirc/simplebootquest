---
slug: "node-path-join-35"
title: "Node Drill: path.join and path.resolve #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('routes', '..', 'public', 'api')\n```","options":["`public/api/`","`/routes/public/api`","`public/api`","`routes/../public/api`"],"answer":2,"explanation":"Node returns `public/api`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'utils', '../dist', 'lib')\n```","options":["`/tests/utils/dist/lib`","`tests/dist/lib`","`tests/utils/../dist/lib`","`tests/dist/lib/`"],"answer":1,"explanation":"Node returns `tests/dist/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', '..', 'lib', 'public')\n```","options":["`db/../lib/public`","`app/lib/public`","`lib/public/`","`/app/lib/public`"],"answer":3,"explanation":"Node returns `/app/lib/public`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'src', 'db', '../public')\n```","options":["`lib/src/db/../public`","`lib/src/public`","`/lib/src/db/public`","`lib/src/public/`"],"answer":1,"explanation":"Node returns `lib/src/public`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'data.json', 'dist', 'users')\n```","options":["`db/data.json/dist/users/`","`db/data.json/dist/users`","`/db/data.json/dist/users`"],"answer":1,"explanation":"Node returns `db/data.json/dist/users`."}]
---
# Node Drill: path.join and path.resolve #35

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
