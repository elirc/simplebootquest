---
slug: "node-path-join-1"
title: "Node Drill: path.join and path.resolve #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('utils', 'public', '../tests')\n```","options":["`utils/public/../tests`","`/utils/public/tests`","`utils/tests`","`utils/tests/`"],"answer":2,"explanation":"Node returns `utils/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'db', '..')\n```","options":["`/tests/db/`","`tests/db/..`","`tests/`","`tests`"],"answer":3,"explanation":"Node returns `tests`."},{"prompt":"What does this return?\n\n```js\npath.join('../tests', 'lib', 'dist')\n```","options":["`../tests/lib/dist`","`../tests/lib/dist/`","`/tests/lib/dist`"],"answer":0,"explanation":"Node returns `../tests/lib/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'utils', 'images')\n```","options":["`../utils/images/`","`../utils/images`","`/utils/images`"],"answer":1,"explanation":"Node returns `../utils/images`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'config', 'images')\n```","options":["`../config/images`","`../config/images/`","`/config/images`"],"answer":0,"explanation":"Node returns `../config/images`."}]
---
# Node Drill: path.join and path.resolve #1

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
