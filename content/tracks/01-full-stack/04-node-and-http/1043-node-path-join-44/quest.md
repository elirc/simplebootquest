---
slug: "node-path-join-44"
title: "Node Drill: path.join and path.resolve #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('lib', '..', 'config')\n```","options":["`config/`","`config`","`/lib/config`","`lib/../config`"],"answer":1,"explanation":"Node returns `config`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'notes.md', 'routes', 'tests')\n```","options":["`api/notes.md/routes/tests`","`/api/notes.md/routes/tests`","`api/notes.md/routes/tests/`"],"answer":0,"explanation":"Node returns `api/notes.md/routes/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'db', 'routes', 'lib')\n```","options":["`/db/routes/lib`","`../db/routes/lib/`","`../db/routes/lib`"],"answer":2,"explanation":"Node returns `../db/routes/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'public', '..')\n```","options":["`/images/public/`","`images`","`images/public/..`","`images/`"],"answer":1,"explanation":"Node returns `images`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'utils', '..', 'routes')\n```","options":["`/app/db/routes`","`db/routes/`","`db/utils/../routes`","`app/db/routes`"],"answer":0,"explanation":"Node returns `/app/db/routes`."}]
---
# Node Drill: path.join and path.resolve #44

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
