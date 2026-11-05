---
slug: "node-path-join-70"
title: "Node Drill: path.join and path.resolve #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'data.json', 'users', 'api')\n```","options":["`dist/data.json/users/api`","`app/dist/data.json/users/api`","`/app/dist/data.json/users/api`","`dist/data.json/users/api/`"],"answer":2,"explanation":"Node returns `/app/dist/data.json/users/api`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'utils', 'routes', 'src')\n```","options":["`/utils/routes/src`","`../utils/routes/src`","`../utils/routes/src/`"],"answer":1,"explanation":"Node returns `../utils/routes/src`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'public', '..')\n```","options":["`utils/public/..`","`utils/`","`utils`","`/utils/public/`"],"answer":2,"explanation":"Node returns `utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('users', '..', 'utils')\n```","options":["`/app/utils`","`users/../utils`","`app/utils`","`utils/`"],"answer":0,"explanation":"Node returns `/app/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('..', 'users', 'dist', 'routes')\n```","options":["`/users/dist/routes`","`../users/dist/routes`","`users/dist/routes`","`../users/dist/routes/`"],"answer":0,"explanation":"Node returns `/users/dist/routes`."}]
---
# Node Drill: path.join and path.resolve #70

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
