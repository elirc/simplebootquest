---
slug: "node-path-join-86"
title: "Node Drill: path.join and path.resolve #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('images', 'users', './public')\n```","options":["`images/users/public/`","`images/users/./public`","`/images/users/./public`","`images/users/public`"],"answer":3,"explanation":"Node returns `images/users/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'config', 'data.json')\n```","options":["`api/config/data.json/`","`app/api/config/data.json`","`/app/api/config/data.json`","`api/config/data.json`"],"answer":2,"explanation":"Node returns `/app/api/config/data.json`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./utils', 'db', 'users', 'public')\n```","options":["`/app/utils/db/users/public`","`utils/db/users/public/`","`app/utils/db/users/public`","`./utils/db/users/public`"],"answer":0,"explanation":"Node returns `/app/utils/db/users/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./api', 'config', 'tests')\n```","options":["`api/config/tests/`","`/app/api/config/tests`","`app/api/config/tests`","`./api/config/tests`"],"answer":1,"explanation":"Node returns `/app/api/config/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('.', 'dist', 'users', 'api')\n```","options":["`app/dist/users/api`","`/app/dist/users/api`","`dist/users/api/`","`./dist/users/api`"],"answer":1,"explanation":"Node returns `/app/dist/users/api`."}]
---
# Node Drill: path.join and path.resolve #86

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
