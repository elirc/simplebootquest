---
slug: "node-path-join-13"
title: "Node Drill: path.join and path.resolve #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('../public', 'utils', 'public', 'users')\n```","options":["`../public/utils/public/users/`","`/public/utils/public/users`","`../public/utils/public/users`"],"answer":2,"explanation":"Node returns `../public/utils/public/users`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'api', 'src')\n```","options":["`./api/src`","`api/src`","`api/src/`","`/./api/src`"],"answer":1,"explanation":"Node returns `api/src`."},{"prompt":"What does this return?\n\n```js\npath.join('images', 'notes.md', 'public', 'routes')\n```","options":["`images/notes.md/public/routes`","`images/notes.md/public/routes/`","`/images/notes.md/public/routes`"],"answer":0,"explanation":"Node returns `images/notes.md/public/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('lib', 'config', 'db', '..')\n```","options":["`/lib/config/db/`","`lib/config/`","`lib/config/db/..`","`lib/config`"],"answer":3,"explanation":"Node returns `lib/config`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'utils', 'public', '..')\n```","options":["`config/utils/public/..`","`config/utils/`","`/config/utils/public/`","`config/utils`"],"answer":3,"explanation":"Node returns `config/utils`."}]
---
# Node Drill: path.join and path.resolve #13

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
