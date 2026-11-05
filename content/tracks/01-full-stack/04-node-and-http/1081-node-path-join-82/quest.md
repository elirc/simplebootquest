---
slug: "node-path-join-82"
title: "Node Drill: path.join and path.resolve #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('utils', 'db', 'src', '..')\n```","options":["`utils/db/src/..`","`app/utils/db`","`utils/db/`","`/app/utils/db`"],"answer":3,"explanation":"Node returns `/app/utils/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', './utils', 'utils')\n```","options":["`app/src/utils/utils`","`/app/src/utils/utils`","`src/./utils/utils`","`src/utils/utils/`"],"answer":1,"explanation":"Node returns `/app/src/utils/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('db', 'utils', '..', 'lib')\n```","options":["`db/lib/`","`db/lib`","`/db/utils/lib`","`db/utils/../lib`"],"answer":1,"explanation":"Node returns `db/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'api', 'utils', '..')\n```","options":["`/app/db/api`","`app/db/api`","`db/api/utils/..`","`db/api/`"],"answer":0,"explanation":"Node returns `/app/db/api`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'public', 'tests', 'images')\n```","options":["`../public/tests/images`","`../public/tests/images/`","`/public/tests/images`"],"answer":0,"explanation":"Node returns `../public/tests/images`."}]
---
# Node Drill: path.join and path.resolve #82

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
