---
slug: "node-path-join-28"
title: "Node Drill: path.join and path.resolve #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../public', 'images', 'utils')\n```","options":["`/public/images/utils`","`public/images/utils`","`../public/images/utils`","`../public/images/utils/`"],"answer":0,"explanation":"Node returns `/public/images/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'config', 'tests', '../config')\n```","options":["`lib/config/config/`","`/lib/config/tests/config`","`lib/config/config`","`lib/config/tests/../config`"],"answer":2,"explanation":"Node returns `lib/config/config`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'routes', '..')\n```","options":["`lib/`","`/lib/routes/`","`lib`","`lib/routes/..`"],"answer":2,"explanation":"Node returns `lib`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'lib', '../images')\n```","options":["`config/lib/../images`","`config/images/`","`config/images`","`/config/lib/images`"],"answer":2,"explanation":"Node returns `config/images`."},{"prompt":"What does this return?\n\n```js\npath.join('public', '..', 'lib')\n```","options":["`/public/lib`","`lib`","`lib/`","`public/../lib`"],"answer":1,"explanation":"Node returns `lib`."}]
---
# Node Drill: path.join and path.resolve #28

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
