---
slug: "node-path-join-24"
title: "Node Drill: path.join and path.resolve #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('lib', 'images', 'dist', '.')\n```","options":["`lib/images/dist/`","`lib/images/dist/.`","`lib/images/dist`","`/lib/images/dist/.`"],"answer":2,"explanation":"Node returns `lib/images/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('../utils', 'db', 'utils', 'src')\n```","options":["`../utils/db/utils/src`","`/utils/db/utils/src`","`../utils/db/utils/src/`"],"answer":0,"explanation":"Node returns `../utils/db/utils/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('images', '.', 'utils')\n```","options":["`images/utils/`","`images/./utils`","`/app/images/utils`","`app/images/utils`"],"answer":2,"explanation":"Node returns `/app/images/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', '../config', 'routes', 'db')\n```","options":["`tests/../config/routes/db`","`config/routes/db/`","`/tests/config/routes/db`","`config/routes/db`"],"answer":3,"explanation":"Node returns `config/routes/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'schema.prisma', 'tests', 'images')\n```","options":["`api/schema.prisma/tests/images`","`/app/api/schema.prisma/tests/images`","`api/schema.prisma/tests/images/`","`app/api/schema.prisma/tests/images`"],"answer":1,"explanation":"Node returns `/app/api/schema.prisma/tests/images`."}]
---
# Node Drill: path.join and path.resolve #24

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
