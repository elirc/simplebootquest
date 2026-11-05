---
slug: "node-path-join-48"
title: "Node Drill: path.join and path.resolve #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('lib', 'api', 'tests', '..')\n```","options":["`lib/api`","`lib/api/tests/..`","`lib/api/`","`/lib/api/tests/`"],"answer":0,"explanation":"Node returns `lib/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('..', 'public', 'api', 'users')\n```","options":["`/public/api/users`","`public/api/users`","`../public/api/users`","`../public/api/users/`"],"answer":0,"explanation":"Node returns `/public/api/users`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', './public', 'routes', 'src')\n```","options":["`dist/public/routes/src/`","`dist/./public/routes/src`","`dist/public/routes/src`","`/dist/./public/routes/src`"],"answer":2,"explanation":"Node returns `dist/public/routes/src`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', 'db', 'api', 'notes.md')\n```","options":["`dist/db/api/notes.md`","`dist/db/api/notes.md/`","`/dist/db/api/notes.md`"],"answer":0,"explanation":"Node returns `dist/db/api/notes.md`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'tests', 'routes')\n```","options":["`tests/routes`","`tests/routes/`","`/./tests/routes`","`./tests/routes`"],"answer":0,"explanation":"Node returns `tests/routes`."}]
---
# Node Drill: path.join and path.resolve #48

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
