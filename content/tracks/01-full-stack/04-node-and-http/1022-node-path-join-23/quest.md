---
slug: "node-path-join-23"
title: "Node Drill: path.join and path.resolve #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'lib', 'notes.md')\n```","options":["`/public/lib/notes.md`","`public/lib/notes.md`","`public/lib/notes.md/`"],"answer":1,"explanation":"Node returns `public/lib/notes.md`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'utils', '.env')\n```","options":["`/routes/utils/.env`","`routes/utils/.env/`","`routes/utils/.env`"],"answer":2,"explanation":"Node returns `routes/utils/.env`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('src', 'users', 'db', '..')\n```","options":["`app/src/users`","`src/users/`","`src/users/db/..`","`/app/src/users`"],"answer":3,"explanation":"Node returns `/app/src/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('config', 'api', './users')\n```","options":["`/app/config/api/users`","`config/api/./users`","`config/api/users/`","`app/config/api/users`"],"answer":0,"explanation":"Node returns `/app/config/api/users`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'routes', 'users', '../public')\n```","options":["`/lib/routes/users/public`","`lib/routes/users/../public`","`lib/routes/public/`","`lib/routes/public`"],"answer":3,"explanation":"Node returns `lib/routes/public`."}]
---
# Node Drill: path.join and path.resolve #23

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
