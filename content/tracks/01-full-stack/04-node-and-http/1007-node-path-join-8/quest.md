---
slug: "node-path-join-8"
title: "Node Drill: path.join and path.resolve #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('api', '../db', 'public')\n```","options":["`db/public/`","`db/public`","`api/../db/public`","`/api/db/public`"],"answer":1,"explanation":"Node returns `db/public`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', '.', 'routes')\n```","options":["`lib/routes`","`lib/./routes`","`lib/routes/`","`/lib/./routes`"],"answer":0,"explanation":"Node returns `lib/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('public', './api', 'dist', 'api')\n```","options":["`public/api/dist/api/`","`/public/./api/dist/api`","`public/./api/dist/api`","`public/api/dist/api`"],"answer":3,"explanation":"Node returns `public/api/dist/api`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'images', 'dist', './src')\n```","options":["`utils/images/dist/src/`","`/utils/images/dist/./src`","`utils/images/dist/src`","`utils/images/dist/./src`"],"answer":2,"explanation":"Node returns `utils/images/dist/src`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'config', 'public', '..')\n```","options":["`lib/config/public/..`","`/lib/config/public/`","`lib/config`","`lib/config/`"],"answer":2,"explanation":"Node returns `lib/config`."}]
---
# Node Drill: path.join and path.resolve #8

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
