---
slug: "node-path-join-76"
title: "Node Drill: path.join and path.resolve #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('..', 'tests', 'db')\n```","options":["`../tests/db/`","`../tests/db`","`/tests/db`"],"answer":1,"explanation":"Node returns `../tests/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'lib', 'config', './tests')\n```","options":["`dist/lib/config/tests/`","`/app/dist/lib/config/tests`","`app/dist/lib/config/tests`","`dist/lib/config/./tests`"],"answer":1,"explanation":"Node returns `/app/dist/lib/config/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./db', 'api', 'config')\n```","options":["`./db/api/config`","`app/db/api/config`","`db/api/config/`","`/app/db/api/config`"],"answer":3,"explanation":"Node returns `/app/db/api/config`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'images', 'routes', 'db')\n```","options":["`./images/routes/db`","`images/routes/db`","`/./images/routes/db`","`images/routes/db/`"],"answer":1,"explanation":"Node returns `images/routes/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('notes.md', 'lib', 'routes')\n```","options":["`/app/notes.md/lib/routes`","`app/notes.md/lib/routes`","`notes.md/lib/routes`","`notes.md/lib/routes/`"],"answer":0,"explanation":"Node returns `/app/notes.md/lib/routes`."}]
---
# Node Drill: path.join and path.resolve #76

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
