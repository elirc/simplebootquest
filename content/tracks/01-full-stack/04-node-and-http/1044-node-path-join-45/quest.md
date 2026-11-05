---
slug: "node-path-join-45"
title: "Node Drill: path.join and path.resolve #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('notes.md', 'utils', 'api')\n```","options":["`notes.md/utils/api`","`/app/notes.md/utils/api`","`app/notes.md/utils/api`","`notes.md/utils/api/`"],"answer":1,"explanation":"Node returns `/app/notes.md/utils/api`."},{"prompt":"What does this return?\n\n```js\npath.join('.env', 'config', 'db', 'lib')\n```","options":["`/.env/config/db/lib`","`.env/config/db/lib`","`.env/config/db/lib/`"],"answer":1,"explanation":"Node returns `.env/config/db/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('./users', 'tests', 'dist', 'config')\n```","options":["`./users/tests/dist/config`","`users/tests/dist/config`","`users/tests/dist/config/`","`/./users/tests/dist/config`"],"answer":1,"explanation":"Node returns `users/tests/dist/config`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'public', './tests', 'config')\n```","options":["`db/public/tests/config`","`db/public/tests/config/`","`db/public/./tests/config`","`/db/public/./tests/config`"],"answer":0,"explanation":"Node returns `db/public/tests/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('utils', 'dist', '..')\n```","options":["`/app/utils`","`app/utils`","`utils/dist/..`","`utils/`"],"answer":0,"explanation":"Node returns `/app/utils`."}]
---
# Node Drill: path.join and path.resolve #45

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
