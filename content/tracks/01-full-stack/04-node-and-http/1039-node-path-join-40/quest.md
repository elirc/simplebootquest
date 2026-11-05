---
slug: "node-path-join-40"
title: "Node Drill: path.join and path.resolve #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'images', '.')\n```","options":["`public/images/.`","`public/images/`","`public/images`","`/public/images/.`"],"answer":2,"explanation":"Node returns `public/images`."},{"prompt":"What does this return?\n\n```js\npath.join('logo.png', 'users', 'routes')\n```","options":["`/logo.png/users/routes`","`logo.png/users/routes/`","`logo.png/users/routes`"],"answer":2,"explanation":"Node returns `logo.png/users/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'config', '.')\n```","options":["`/public/config/.`","`public/config/`","`public/config`","`public/config/.`"],"answer":2,"explanation":"Node returns `public/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', './utils', 'tests', 'api')\n```","options":["`app/routes/utils/tests/api`","`routes/./utils/tests/api`","`/app/routes/utils/tests/api`","`routes/utils/tests/api/`"],"answer":2,"explanation":"Node returns `/app/routes/utils/tests/api`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'utils', 'routes')\n```","options":["`utils/routes/`","`utils/routes`","`/./utils/routes`","`./utils/routes`"],"answer":1,"explanation":"Node returns `utils/routes`."}]
---
# Node Drill: path.join and path.resolve #40

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
