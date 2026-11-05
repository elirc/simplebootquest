---
slug: "node-path-join-9"
title: "Node Drill: path.join and path.resolve #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('app.ts', 'tests', 'lib')\n```","options":["`app.ts/tests/lib`","`app.ts/tests/lib/`","`/app.ts/tests/lib`"],"answer":0,"explanation":"Node returns `app.ts/tests/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'tests', '.env')\n```","options":["`public/tests/.env`","`public/tests/.env/`","`/public/tests/.env`"],"answer":0,"explanation":"Node returns `public/tests/.env`."},{"prompt":"What does this return?\n\n```js\npath.join('data.json', 'config', 'utils')\n```","options":["`data.json/config/utils`","`data.json/config/utils/`","`/data.json/config/utils`"],"answer":0,"explanation":"Node returns `data.json/config/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'api', 'dist', '../users')\n```","options":["`utils/api/users/`","`utils/api/dist/../users`","`/utils/api/dist/users`","`utils/api/users`"],"answer":3,"explanation":"Node returns `utils/api/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'notes.md', 'db', 'config')\n```","options":["`dist/notes.md/db/config/`","`dist/notes.md/db/config`","`app/dist/notes.md/db/config`","`/app/dist/notes.md/db/config`"],"answer":3,"explanation":"Node returns `/app/dist/notes.md/db/config`."}]
---
# Node Drill: path.join and path.resolve #9

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
