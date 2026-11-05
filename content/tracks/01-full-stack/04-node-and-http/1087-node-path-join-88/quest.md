---
slug: "node-path-join-88"
title: "Node Drill: path.join and path.resolve #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('.', 'config', 'db')\n```","options":["`config/db/`","`./config/db`","`config/db`","`/./config/db`"],"answer":2,"explanation":"Node returns `config/db`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'config', 'src', './users')\n```","options":["`images/config/src/./users`","`/images/config/src/./users`","`images/config/src/users/`","`images/config/src/users`"],"answer":3,"explanation":"Node returns `images/config/src/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', '..', 'public')\n```","options":["`public/`","`/app/public`","`api/../public`","`app/public`"],"answer":1,"explanation":"Node returns `/app/public`."},{"prompt":"What does this return?\n\n```js\npath.join('./utils', 'src', 'routes', 'db')\n```","options":["`/./utils/src/routes/db`","`utils/src/routes/db/`","`utils/src/routes/db`","`./utils/src/routes/db`"],"answer":2,"explanation":"Node returns `utils/src/routes/db`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', './src', 'config')\n```","options":["`tests/src/config/`","`/tests/./src/config`","`tests/src/config`","`tests/./src/config`"],"answer":2,"explanation":"Node returns `tests/src/config`."}]
---
# Node Drill: path.join and path.resolve #88

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
