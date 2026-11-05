---
slug: "node-path-join-17"
title: "Node Drill: path.join and path.resolve #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('schema.prisma', 'src', 'api')\n```","options":["`schema.prisma/src/api/`","`/app/schema.prisma/src/api`","`schema.prisma/src/api`","`app/schema.prisma/src/api`"],"answer":1,"explanation":"Node returns `/app/schema.prisma/src/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', '../config', 'images')\n```","options":["`/app/config/images`","`tests/../config/images`","`app/config/images`","`config/images/`"],"answer":0,"explanation":"Node returns `/app/config/images`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'app.ts', 'images', 'tests')\n```","options":["`lib/app.ts/images/tests`","`lib/app.ts/images/tests/`","`/lib/app.ts/images/tests`"],"answer":0,"explanation":"Node returns `lib/app.ts/images/tests`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('config', '.', 'db', 'tests')\n```","options":["`app/config/db/tests`","`config/db/tests/`","`config/./db/tests`","`/app/config/db/tests`"],"answer":3,"explanation":"Node returns `/app/config/db/tests`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'src', 'tests', '.')\n```","options":["`utils/src/tests/`","`/utils/src/tests/.`","`utils/src/tests/.`","`utils/src/tests`"],"answer":3,"explanation":"Node returns `utils/src/tests`."}]
---
# Node Drill: path.join and path.resolve #17

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
