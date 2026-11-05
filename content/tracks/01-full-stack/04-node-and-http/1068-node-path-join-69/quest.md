---
slug: "node-path-join-69"
title: "Node Drill: path.join and path.resolve #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'lib', 'users', './users')\n```","options":["`dist/lib/users/users/`","`dist/lib/users/./users`","`app/dist/lib/users/users`","`/app/dist/lib/users/users`"],"answer":3,"explanation":"Node returns `/app/dist/lib/users/users`."},{"prompt":"What does this return?\n\n```js\npath.join('notes.md', 'src', 'utils')\n```","options":["`/notes.md/src/utils`","`notes.md/src/utils`","`notes.md/src/utils/`"],"answer":1,"explanation":"Node returns `notes.md/src/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'db', 'routes')\n```","options":["`db/routes/`","`./db/routes`","`/./db/routes`","`db/routes`"],"answer":3,"explanation":"Node returns `db/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'utils', 'styles.css', 'config')\n```","options":["`tests/utils/styles.css/config`","`tests/utils/styles.css/config/`","`/tests/utils/styles.css/config`"],"answer":0,"explanation":"Node returns `tests/utils/styles.css/config`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'db', 'lib', 'src')\n```","options":["`../db/lib/src`","`../db/lib/src/`","`/db/lib/src`"],"answer":0,"explanation":"Node returns `../db/lib/src`."}]
---
# Node Drill: path.join and path.resolve #69

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
