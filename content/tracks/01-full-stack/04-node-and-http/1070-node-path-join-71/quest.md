---
slug: "node-path-join-71"
title: "Node Drill: path.join and path.resolve #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../api', 'db', 'tests')\n```","options":["`../api/db/tests`","`/api/db/tests`","`api/db/tests`","`../api/db/tests/`"],"answer":1,"explanation":"Node returns `/api/db/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'routes', 'db')\n```","options":["`../routes/db/`","`../routes/db`","`/routes/db`"],"answer":1,"explanation":"Node returns `../routes/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('schema.prisma', 'users', 'public')\n```","options":["`schema.prisma/users/public`","`/app/schema.prisma/users/public`","`app/schema.prisma/users/public`","`schema.prisma/users/public/`"],"answer":1,"explanation":"Node returns `/app/schema.prisma/users/public`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'index.js', 'utils')\n```","options":["`/lib/index.js/utils`","`lib/index.js/utils/`","`lib/index.js/utils`"],"answer":2,"explanation":"Node returns `lib/index.js/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../db', 'routes', 'users')\n```","options":["`/db/routes/users`","`../db/routes/users`","`../db/routes/users/`","`db/routes/users`"],"answer":0,"explanation":"Node returns `/db/routes/users`."}]
---
# Node Drill: path.join and path.resolve #71

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
