---
slug: "node-path-join-80"
title: "Node Drill: path.join and path.resolve #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('../dist', 'db', 'dist')\n```","options":["`/dist/db/dist`","`../dist/db/dist/`","`../dist/db/dist`"],"answer":2,"explanation":"Node returns `../dist/db/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('api', '.', 'src')\n```","options":["`api/src/`","`api/./src`","`/api/./src`","`api/src`"],"answer":3,"explanation":"Node returns `api/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', 'logo.png', 'lib')\n```","options":["`app/routes/logo.png/lib`","`routes/logo.png/lib/`","`routes/logo.png/lib`","`/app/routes/logo.png/lib`"],"answer":3,"explanation":"Node returns `/app/routes/logo.png/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('images', 'src', '../tests')\n```","options":["`images/tests/`","`/app/images/tests`","`images/src/../tests`","`app/images/tests`"],"answer":1,"explanation":"Node returns `/app/images/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', './utils', 'dist')\n```","options":["`app/public/utils/dist`","`public/./utils/dist`","`/app/public/utils/dist`","`public/utils/dist/`"],"answer":2,"explanation":"Node returns `/app/public/utils/dist`."}]
---
# Node Drill: path.join and path.resolve #80

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
