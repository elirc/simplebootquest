---
slug: "node-path-join-90"
title: "Node Drill: path.join and path.resolve #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('users', '../src', 'dist', 'tests')\n```","options":["`src/dist/tests/`","`users/../src/dist/tests`","`/users/src/dist/tests`","`src/dist/tests`"],"answer":3,"explanation":"Node returns `src/dist/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', '..', 'utils', 'lib')\n```","options":["`utils/lib/`","`app/utils/lib`","`public/../utils/lib`","`/app/utils/lib`"],"answer":3,"explanation":"Node returns `/app/utils/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../routes', 'users', 'dist')\n```","options":["`/routes/users/dist`","`../routes/users/dist`","`../routes/users/dist/`","`routes/users/dist`"],"answer":0,"explanation":"Node returns `/routes/users/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('server.mjs', 'dist', 'tests')\n```","options":["`server.mjs/dist/tests`","`server.mjs/dist/tests/`","`/server.mjs/dist/tests`"],"answer":0,"explanation":"Node returns `server.mjs/dist/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'api', 'config')\n```","options":["`../api/config`","`../api/config/`","`/api/config`"],"answer":0,"explanation":"Node returns `../api/config`."}]
---
# Node Drill: path.join and path.resolve #90

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
