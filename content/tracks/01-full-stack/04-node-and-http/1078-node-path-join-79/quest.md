---
slug: "node-path-join-79"
title: "Node Drill: path.join and path.resolve #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('app.ts', 'routes', 'config', 'db')\n```","options":["`/app.ts/routes/config/db`","`app.ts/routes/config/db/`","`app.ts/routes/config/db`"],"answer":2,"explanation":"Node returns `app.ts/routes/config/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('config', '../config', 'public')\n```","options":["`config/../config/public`","`app/config/public`","`/app/config/public`","`config/public/`"],"answer":2,"explanation":"Node returns `/app/config/public`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'schema.prisma', 'config')\n```","options":["`/src/schema.prisma/config`","`src/schema.prisma/config`","`src/schema.prisma/config/`"],"answer":1,"explanation":"Node returns `src/schema.prisma/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('.', 'api', 'public')\n```","options":["`api/public/`","`/app/api/public`","`app/api/public`","`./api/public`"],"answer":1,"explanation":"Node returns `/app/api/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', '..', 'db')\n```","options":["`db/`","`app/db`","`/app/db`","`src/../db`"],"answer":2,"explanation":"Node returns `/app/db`."}]
---
# Node Drill: path.join and path.resolve #79

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
