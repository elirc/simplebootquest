---
slug: "node-path-join-15"
title: "Node Drill: path.join and path.resolve #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', 'routes', '.')\n```","options":["`lib/routes/`","`/app/lib/routes`","`lib/routes/.`","`app/lib/routes`"],"answer":1,"explanation":"Node returns `/app/lib/routes`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'routes', '..')\n```","options":["`app/db`","`/app/db`","`db/`","`db/routes/..`"],"answer":1,"explanation":"Node returns `/app/db`."},{"prompt":"What does this return?\n\n```js\npath.join('tests', 'src', '.')\n```","options":["`tests/src`","`tests/src/.`","`tests/src/`","`/tests/src/.`"],"answer":0,"explanation":"Node returns `tests/src`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', '.env', 'config')\n```","options":["`routes/.env/config`","`routes/.env/config/`","`/routes/.env/config`"],"answer":0,"explanation":"Node returns `routes/.env/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../src', 'utils', 'tests')\n```","options":["`/src/utils/tests`","`src/utils/tests`","`../src/utils/tests`","`../src/utils/tests/`"],"answer":0,"explanation":"Node returns `/src/utils/tests`."}]
---
# Node Drill: path.join and path.resolve #15

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
