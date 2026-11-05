---
slug: "node-path-join-42"
title: "Node Drill: path.join and path.resolve #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('..', 'lib', 'routes', 'api')\n```","options":["`lib/routes/api`","`../lib/routes/api`","`/lib/routes/api`","`../lib/routes/api/`"],"answer":2,"explanation":"Node returns `/lib/routes/api`."},{"prompt":"What does this return?\n\n```js\npath.join('styles.css', 'dist', 'db', 'users')\n```","options":["`styles.css/dist/db/users/`","`/styles.css/dist/db/users`","`styles.css/dist/db/users`"],"answer":2,"explanation":"Node returns `styles.css/dist/db/users`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'src', 'dist')\n```","options":["`src/dist`","`src/dist/`","`./src/dist`","`/./src/dist`"],"answer":0,"explanation":"Node returns `src/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', './dist', 'src')\n```","options":["`tests/./dist/src`","`app/tests/dist/src`","`/app/tests/dist/src`","`tests/dist/src/`"],"answer":2,"explanation":"Node returns `/app/tests/dist/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../users', 'tests', 'utils', 'api')\n```","options":["`users/tests/utils/api`","`../users/tests/utils/api/`","`../users/tests/utils/api`","`/users/tests/utils/api`"],"answer":3,"explanation":"Node returns `/users/tests/utils/api`."}]
---
# Node Drill: path.join and path.resolve #42

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
