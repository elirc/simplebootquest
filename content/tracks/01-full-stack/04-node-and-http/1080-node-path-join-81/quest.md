---
slug: "node-path-join-81"
title: "Node Drill: path.join and path.resolve #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('../src', 'api', 'db')\n```","options":["`../src/api/db/`","`../src/api/db`","`/src/api/db`"],"answer":1,"explanation":"Node returns `../src/api/db`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'utils', 'images')\n```","options":["`/./utils/images`","`./utils/images`","`utils/images/`","`utils/images`"],"answer":3,"explanation":"Node returns `utils/images`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'utils', '..', 'dist')\n```","options":["`src/utils/../dist`","`src/dist`","`src/dist/`","`/src/utils/dist`"],"answer":1,"explanation":"Node returns `src/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', '../api', 'images')\n```","options":["`api/images`","`tests/../api/images`","`api/images/`","`/tests/api/images`"],"answer":0,"explanation":"Node returns `api/images`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'dist', 'db', '.')\n```","options":["`public/dist/db/`","`public/dist/db/.`","`/public/dist/db/.`","`public/dist/db`"],"answer":3,"explanation":"Node returns `public/dist/db`."}]
---
# Node Drill: path.join and path.resolve #81

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
