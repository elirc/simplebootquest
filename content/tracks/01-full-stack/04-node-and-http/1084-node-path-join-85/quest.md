---
slug: "node-path-join-85"
title: "Node Drill: path.join and path.resolve #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('src', 'routes', '.', 'lib')\n```","options":["`src/routes/lib`","`src/routes/./lib`","`src/routes/lib/`","`/src/routes/./lib`"],"answer":0,"explanation":"Node returns `src/routes/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', '.', 'config', 'users')\n```","options":["`/app/lib/config/users`","`lib/./config/users`","`app/lib/config/users`","`lib/config/users/`"],"answer":0,"explanation":"Node returns `/app/lib/config/users`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'routes', 'src')\n```","options":["`../routes/src`","`../routes/src/`","`/routes/src`"],"answer":0,"explanation":"Node returns `../routes/src`."},{"prompt":"What does this return?\n\n```js\npath.join('../config', 'public', 'dist')\n```","options":["`/config/public/dist`","`../config/public/dist/`","`../config/public/dist`"],"answer":2,"explanation":"Node returns `../config/public/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'src', '..', 'lib')\n```","options":["`api/src/../lib`","`api/lib/`","`app/api/lib`","`/app/api/lib`"],"answer":3,"explanation":"Node returns `/app/api/lib`."}]
---
# Node Drill: path.join and path.resolve #85

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
