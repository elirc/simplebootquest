---
slug: "node-path-join-20"
title: "Node Drill: path.join and path.resolve #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('db', 'config', '../src', 'tests')\n```","options":["`/db/config/src/tests`","`db/src/tests/`","`db/config/../src/tests`","`db/src/tests`"],"answer":3,"explanation":"Node returns `db/src/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'lib', '../lib')\n```","options":["`dist/lib/`","`/app/dist/lib`","`dist/lib/../lib`","`app/dist/lib`"],"answer":1,"explanation":"Node returns `/app/dist/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'routes', '../dist')\n```","options":["`lib/dist/`","`/lib/routes/dist`","`lib/dist`","`lib/routes/../dist`"],"answer":2,"explanation":"Node returns `lib/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', 'public', './tests')\n```","options":["`lib/public/./tests`","`/app/lib/public/tests`","`lib/public/tests/`","`app/lib/public/tests`"],"answer":1,"explanation":"Node returns `/app/lib/public/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('users', '..', 'lib')\n```","options":["`/users/lib`","`lib`","`lib/`","`users/../lib`"],"answer":1,"explanation":"Node returns `lib`."}]
---
# Node Drill: path.join and path.resolve #20

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
