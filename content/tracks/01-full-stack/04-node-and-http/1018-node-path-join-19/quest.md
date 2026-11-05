---
slug: "node-path-join-19"
title: "Node Drill: path.join and path.resolve #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('dist', 'db', 'styles.css')\n```","options":["`dist/db/styles.css/`","`/dist/db/styles.css`","`dist/db/styles.css`"],"answer":2,"explanation":"Node returns `dist/db/styles.css`."},{"prompt":"What does this return?\n\n```js\npath.join('users', '../dist', 'lib')\n```","options":["`/users/dist/lib`","`users/../dist/lib`","`dist/lib`","`dist/lib/`"],"answer":2,"explanation":"Node returns `dist/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('../utils', 'public', 'tests', 'images')\n```","options":["`/utils/public/tests/images`","`../utils/public/tests/images/`","`../utils/public/tests/images`"],"answer":2,"explanation":"Node returns `../utils/public/tests/images`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'utils', '..')\n```","options":["`api/`","`api/utils/..`","`/api/utils/`","`api`"],"answer":3,"explanation":"Node returns `api`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'utils', '..')\n```","options":["`images`","`images/`","`images/utils/..`","`/images/utils/`"],"answer":0,"explanation":"Node returns `images`."}]
---
# Node Drill: path.join and path.resolve #19

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
