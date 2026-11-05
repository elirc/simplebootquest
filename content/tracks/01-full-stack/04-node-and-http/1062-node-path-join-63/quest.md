---
slug: "node-path-join-63"
title: "Node Drill: path.join and path.resolve #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('routes', 'tests', '../dist', 'public')\n```","options":["`routes/tests/../dist/public`","`routes/dist/public/`","`routes/dist/public`","`/routes/tests/dist/public`"],"answer":2,"explanation":"Node returns `routes/dist/public`."},{"prompt":"What does this return?\n\n```js\npath.join('notes.md', 'config', 'public', 'api')\n```","options":["`notes.md/config/public/api`","`/notes.md/config/public/api`","`notes.md/config/public/api/`"],"answer":0,"explanation":"Node returns `notes.md/config/public/api`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', '..', 'images')\n```","options":["`images/`","`images`","`/tests/images`","`tests/../images`"],"answer":1,"explanation":"Node returns `images`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'src', 'utils', '..')\n```","options":["`routes/src/`","`/routes/src/utils/`","`routes/src`","`routes/src/utils/..`"],"answer":2,"explanation":"Node returns `routes/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', 'tests', 'server.mjs')\n```","options":["`lib/tests/server.mjs`","`/app/lib/tests/server.mjs`","`app/lib/tests/server.mjs`","`lib/tests/server.mjs/`"],"answer":1,"explanation":"Node returns `/app/lib/tests/server.mjs`."}]
---
# Node Drill: path.join and path.resolve #63

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
