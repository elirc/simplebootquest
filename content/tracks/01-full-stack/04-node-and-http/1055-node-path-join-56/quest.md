---
slug: "node-path-join-56"
title: "Node Drill: path.join and path.resolve #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('utils', 'routes', '../lib', 'tests')\n```","options":["`utils/lib/tests/`","`utils/lib/tests`","`utils/routes/../lib/tests`","`/utils/routes/lib/tests`"],"answer":1,"explanation":"Node returns `utils/lib/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', 'src', '.env', 'dist')\n```","options":["`tests/src/.env/dist/`","`/app/tests/src/.env/dist`","`app/tests/src/.env/dist`","`tests/src/.env/dist`"],"answer":1,"explanation":"Node returns `/app/tests/src/.env/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', 'db', '.')\n```","options":["`src/db/`","`/app/src/db`","`src/db/.`","`app/src/db`"],"answer":1,"explanation":"Node returns `/app/src/db`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', 'db', '..', 'images')\n```","options":["`dist/db/../images`","`/dist/db/images`","`dist/images`","`dist/images/`"],"answer":2,"explanation":"Node returns `dist/images`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', './db', 'utils')\n```","options":["`/dist/./db/utils`","`dist/db/utils/`","`dist/./db/utils`","`dist/db/utils`"],"answer":3,"explanation":"Node returns `dist/db/utils`."}]
---
# Node Drill: path.join and path.resolve #56

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
