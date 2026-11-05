---
slug: "node-path-join-43"
title: "Node Drill: path.join and path.resolve #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'dist', './images', 'users')\n```","options":["`public/dist/./images/users`","`public/dist/images/users`","`public/dist/images/users/`","`/public/dist/./images/users`"],"answer":1,"explanation":"Node returns `public/dist/images/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', '..', 'utils')\n```","options":["`/app/utils`","`app/utils`","`utils/`","`dist/../utils`"],"answer":0,"explanation":"Node returns `/app/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', 'images', 'api', '../api')\n```","options":["`/app/routes/images/api`","`routes/images/api/../api`","`app/routes/images/api`","`routes/images/api/`"],"answer":0,"explanation":"Node returns `/app/routes/images/api`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'tests', './images')\n```","options":["`api/tests/images/`","`api/tests/./images`","`api/tests/images`","`/api/tests/./images`"],"answer":2,"explanation":"Node returns `api/tests/images`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', '../public', 'config')\n```","options":["`public/config/`","`app/public/config`","`api/../public/config`","`/app/public/config`"],"answer":3,"explanation":"Node returns `/app/public/config`."}]
---
# Node Drill: path.join and path.resolve #43

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
