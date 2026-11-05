---
slug: "node-path-join-47"
title: "Node Drill: path.join and path.resolve #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('lib', 'config', '..')\n```","options":["`lib`","`lib/config/..`","`lib/`","`/lib/config/`"],"answer":0,"explanation":"Node returns `lib`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'images', 'dist', 'notes.md')\n```","options":["`users/images/dist/notes.md/`","`users/images/dist/notes.md`","`/users/images/dist/notes.md`"],"answer":1,"explanation":"Node returns `users/images/dist/notes.md`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'users', '../dist', 'api')\n```","options":["`/images/users/dist/api`","`images/dist/api`","`images/dist/api/`","`images/users/../dist/api`"],"answer":1,"explanation":"Node returns `images/dist/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../images', 'dist', 'db')\n```","options":["`../images/dist/db`","`../images/dist/db/`","`images/dist/db`","`/images/dist/db`"],"answer":3,"explanation":"Node returns `/images/dist/db`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'routes', '../config')\n```","options":["`lib/routes/../config`","`lib/config`","`/lib/routes/config`","`lib/config/`"],"answer":1,"explanation":"Node returns `lib/config`."}]
---
# Node Drill: path.join and path.resolve #47

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
