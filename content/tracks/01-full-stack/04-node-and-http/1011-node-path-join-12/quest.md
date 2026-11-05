---
slug: "node-path-join-12"
title: "Node Drill: path.join and path.resolve #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', '.', 'db')\n```","options":["`/public/./db`","`public/db/`","`public/db`","`public/./db`"],"answer":2,"explanation":"Node returns `public/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./images', 'public', 'lib')\n```","options":["`app/images/public/lib`","`images/public/lib/`","`/app/images/public/lib`","`./images/public/lib`"],"answer":2,"explanation":"Node returns `/app/images/public/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'config', 'utils', '../config')\n```","options":["`/api/config/utils/config`","`api/config/config`","`api/config/utils/../config`","`api/config/config/`"],"answer":1,"explanation":"Node returns `api/config/config`."},{"prompt":"What does this return?\n\n```js\npath.join('api', './config', 'images', 'users')\n```","options":["`/api/./config/images/users`","`api/config/images/users/`","`api/./config/images/users`","`api/config/images/users`"],"answer":3,"explanation":"Node returns `api/config/images/users`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'api', '.', 'lib')\n```","options":["`utils/api/lib`","`utils/api/./lib`","`utils/api/lib/`","`/utils/api/./lib`"],"answer":0,"explanation":"Node returns `utils/api/lib`."}]
---
# Node Drill: path.join and path.resolve #12

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
