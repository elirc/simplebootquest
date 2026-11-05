---
slug: "node-path-join-66"
title: "Node Drill: path.join and path.resolve #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', './src', 'public')\n```","options":["`/app/tests/src/public`","`tests/src/public/`","`app/tests/src/public`","`tests/./src/public`"],"answer":0,"explanation":"Node returns `/app/tests/src/public`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'schema.prisma', 'config')\n```","options":["`tests/schema.prisma/config/`","`tests/schema.prisma/config`","`/tests/schema.prisma/config`"],"answer":1,"explanation":"Node returns `tests/schema.prisma/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'lib', 'public', '.')\n```","options":["`/app/db/lib/public`","`db/lib/public/.`","`app/db/lib/public`","`db/lib/public/`"],"answer":0,"explanation":"Node returns `/app/db/lib/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', '../utils', 'users', 'routes')\n```","options":["`tests/../utils/users/routes`","`utils/users/routes/`","`/app/utils/users/routes`","`app/utils/users/routes`"],"answer":2,"explanation":"Node returns `/app/utils/users/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'routes', 'db', 'lib')\n```","options":["`../routes/db/lib/`","`../routes/db/lib`","`/routes/db/lib`"],"answer":1,"explanation":"Node returns `../routes/db/lib`."}]
---
# Node Drill: path.join and path.resolve #66

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
