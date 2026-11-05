---
slug: "node-path-join-54"
title: "Node Drill: path.join and path.resolve #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('./api', 'routes', 'images')\n```","options":["`api/routes/images`","`./api/routes/images`","`api/routes/images/`","`/./api/routes/images`"],"answer":0,"explanation":"Node returns `api/routes/images`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'archive.tar.gz', 'dist', 'src')\n```","options":["`lib/archive.tar.gz/dist/src`","`/lib/archive.tar.gz/dist/src`","`lib/archive.tar.gz/dist/src/`"],"answer":0,"explanation":"Node returns `lib/archive.tar.gz/dist/src`."},{"prompt":"What does this return?\n\n```js\npath.join('../api', 'api', 'routes', 'tests')\n```","options":["`../api/api/routes/tests`","`../api/api/routes/tests/`","`/api/api/routes/tests`"],"answer":0,"explanation":"Node returns `../api/api/routes/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'tests', 'public', '.')\n```","options":["`/routes/tests/public/.`","`routes/tests/public`","`routes/tests/public/`","`routes/tests/public/.`"],"answer":1,"explanation":"Node returns `routes/tests/public`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'lib', 'users', 'tests')\n```","options":["`./lib/users/tests`","`/./lib/users/tests`","`lib/users/tests/`","`lib/users/tests`"],"answer":3,"explanation":"Node returns `lib/users/tests`."}]
---
# Node Drill: path.join and path.resolve #54

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
