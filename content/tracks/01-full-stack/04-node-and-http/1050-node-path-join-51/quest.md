---
slug: "node-path-join-51"
title: "Node Drill: path.join and path.resolve #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('public', 'images', 'lib', '.env')\n```","options":["`public/images/lib/.env/`","`public/images/lib/.env`","`/public/images/lib/.env`"],"answer":1,"explanation":"Node returns `public/images/lib/.env`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'images', 'routes')\n```","options":["`/images/routes`","`../images/routes/`","`../images/routes`"],"answer":2,"explanation":"Node returns `../images/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'utils', '..')\n```","options":["`/routes/utils/`","`routes/`","`routes`","`routes/utils/..`"],"answer":2,"explanation":"Node returns `routes`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'api', '..', 'src')\n```","options":["`public/src`","`/public/api/src`","`public/api/../src`","`public/src/`"],"answer":0,"explanation":"Node returns `public/src`."},{"prompt":"What does this return?\n\n```js\npath.join('../public', 'src', 'dist')\n```","options":["`../public/src/dist`","`/public/src/dist`","`../public/src/dist/`"],"answer":0,"explanation":"Node returns `../public/src/dist`."}]
---
# Node Drill: path.join and path.resolve #51

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
