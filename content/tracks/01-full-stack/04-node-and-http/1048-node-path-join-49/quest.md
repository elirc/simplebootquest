---
slug: "node-path-join-49"
title: "Node Drill: path.join and path.resolve #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('../dist', 'public', 'tests')\n```","options":["`../dist/public/tests/`","`../dist/public/tests`","`/dist/public/tests`"],"answer":1,"explanation":"Node returns `../dist/public/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'config', 'src', '.')\n```","options":["`/db/config/src/.`","`db/config/src`","`db/config/src/`","`db/config/src/.`"],"answer":1,"explanation":"Node returns `db/config/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', '../users', 'lib')\n```","options":["`dist/../users/lib`","`/app/users/lib`","`app/users/lib`","`users/lib/`"],"answer":1,"explanation":"Node returns `/app/users/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'dist', 'db', '../public')\n```","options":["`utils/dist/public/`","`utils/dist/public`","`utils/dist/db/../public`","`/utils/dist/db/public`"],"answer":1,"explanation":"Node returns `utils/dist/public`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'users', '..')\n```","options":["`tests/`","`tests/users/..`","`tests`","`/tests/users/`"],"answer":2,"explanation":"Node returns `tests`."}]
---
# Node Drill: path.join and path.resolve #49

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
