---
slug: "node-path-join-33"
title: "Node Drill: path.join and path.resolve #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', 'tests', 'notes.md', 'lib')\n```","options":["`app/public/tests/notes.md/lib`","`public/tests/notes.md/lib`","`/app/public/tests/notes.md/lib`","`public/tests/notes.md/lib/`"],"answer":2,"explanation":"Node returns `/app/public/tests/notes.md/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', '.', 'lib')\n```","options":["`tests/lib`","`/tests/./lib`","`tests/./lib`","`tests/lib/`"],"answer":0,"explanation":"Node returns `tests/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../dist', 'users', 'routes', 'src')\n```","options":["`../dist/users/routes/src`","`/dist/users/routes/src`","`../dist/users/routes/src/`","`dist/users/routes/src`"],"answer":1,"explanation":"Node returns `/dist/users/routes/src`."},{"prompt":"What does this return?\n\n```js\npath.join('dist', 'db', './public')\n```","options":["`dist/db/public/`","`/dist/db/./public`","`dist/db/public`","`dist/db/./public`"],"answer":2,"explanation":"Node returns `dist/db/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', './dist', 'dist', 'src')\n```","options":["`app/public/dist/dist/src`","`/app/public/dist/dist/src`","`public/./dist/dist/src`","`public/dist/dist/src/`"],"answer":1,"explanation":"Node returns `/app/public/dist/dist/src`."}]
---
# Node Drill: path.join and path.resolve #33

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
