---
slug: "node-path-join-27"
title: "Node Drill: path.join and path.resolve #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', 'routes', '.')\n```","options":["`public/routes/`","`app/public/routes`","`/app/public/routes`","`public/routes/.`"],"answer":2,"explanation":"Node returns `/app/public/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'lib', './tests', 'dist')\n```","options":["`config/lib/./tests/dist`","`/config/lib/./tests/dist`","`config/lib/tests/dist/`","`config/lib/tests/dist`"],"answer":3,"explanation":"Node returns `config/lib/tests/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('data.json', 'src', 'routes')\n```","options":["`data.json/src/routes/`","`/data.json/src/routes`","`data.json/src/routes`"],"answer":2,"explanation":"Node returns `data.json/src/routes`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'data.json', 'lib')\n```","options":["`/app/db/data.json/lib`","`app/db/data.json/lib`","`db/data.json/lib/`","`db/data.json/lib`"],"answer":0,"explanation":"Node returns `/app/db/data.json/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'src', 'users', 'routes')\n```","options":["`../src/users/routes`","`../src/users/routes/`","`/src/users/routes`"],"answer":0,"explanation":"Node returns `../src/users/routes`."}]
---
# Node Drill: path.join and path.resolve #27

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
