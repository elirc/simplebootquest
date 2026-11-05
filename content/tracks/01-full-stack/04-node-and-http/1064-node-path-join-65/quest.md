---
slug: "node-path-join-65"
title: "Node Drill: path.join and path.resolve #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('..', 'src', 'db', 'public')\n```","options":["`../src/db/public/`","`../src/db/public`","`/src/db/public`"],"answer":1,"explanation":"Node returns `../src/db/public`."},{"prompt":"What does this return?\n\n```js\npath.join('public', './db', 'tests', 'utils')\n```","options":["`public/./db/tests/utils`","`public/db/tests/utils/`","`public/db/tests/utils`","`/public/./db/tests/utils`"],"answer":2,"explanation":"Node returns `public/db/tests/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'config', '.', 'public')\n```","options":["`api/config/public/`","`api/config/./public`","`/api/config/./public`","`api/config/public`"],"answer":3,"explanation":"Node returns `api/config/public`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'dist', 'styles.css', 'utils')\n```","options":["`/tests/dist/styles.css/utils`","`tests/dist/styles.css/utils/`","`tests/dist/styles.css/utils`"],"answer":2,"explanation":"Node returns `tests/dist/styles.css/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('users', 'dist', 'index.js', 'lib')\n```","options":["`/users/dist/index.js/lib`","`users/dist/index.js/lib`","`users/dist/index.js/lib/`"],"answer":1,"explanation":"Node returns `users/dist/index.js/lib`."}]
---
# Node Drill: path.join and path.resolve #65

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
