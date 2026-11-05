---
slug: "node-path-join-29"
title: "Node Drill: path.join and path.resolve #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('users', 'config', './public')\n```","options":["`/users/config/./public`","`users/config/./public`","`users/config/public`","`users/config/public/`"],"answer":2,"explanation":"Node returns `users/config/public`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'routes', 'images')\n```","options":["`./routes/images`","`routes/images`","`routes/images/`","`/./routes/images`"],"answer":1,"explanation":"Node returns `routes/images`."},{"prompt":"What does this return?\n\n```js\npath.join('index.js', 'routes', 'lib', 'public')\n```","options":["`index.js/routes/lib/public`","`index.js/routes/lib/public/`","`/index.js/routes/lib/public`"],"answer":0,"explanation":"Node returns `index.js/routes/lib/public`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'tests', 'api')\n```","options":["`./tests/api`","`tests/api/`","`tests/api`","`/./tests/api`"],"answer":2,"explanation":"Node returns `tests/api`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'lib', 'public')\n```","options":["`/lib/public`","`../lib/public`","`../lib/public/`"],"answer":1,"explanation":"Node returns `../lib/public`."}]
---
# Node Drill: path.join and path.resolve #29

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
