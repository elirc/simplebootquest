---
slug: "node-path-join-73"
title: "Node Drill: path.join and path.resolve #73"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('../api', 'images', 'public')\n```","options":["`../api/images/public`","`/api/images/public`","`../api/images/public/`"],"answer":0,"explanation":"Node returns `../api/images/public`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'src', 'api', 'config')\n```","options":["`../src/api/config`","`../src/api/config/`","`/src/api/config`"],"answer":0,"explanation":"Node returns `../src/api/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./api', 'tests', 'utils', 'public')\n```","options":["`./api/tests/utils/public`","`/app/api/tests/utils/public`","`app/api/tests/utils/public`","`api/tests/utils/public/`"],"answer":1,"explanation":"Node returns `/app/api/tests/utils/public`."},{"prompt":"What does this return?\n\n```js\npath.join('./db', 'src', 'lib')\n```","options":["`db/src/lib`","`/./db/src/lib`","`./db/src/lib`","`db/src/lib/`"],"answer":0,"explanation":"Node returns `db/src/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'notes.md', 'tests', 'lib')\n```","options":["`routes/notes.md/tests/lib/`","`/routes/notes.md/tests/lib`","`routes/notes.md/tests/lib`"],"answer":2,"explanation":"Node returns `routes/notes.md/tests/lib`."}]
---
# Node Drill: path.join and path.resolve #73

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
