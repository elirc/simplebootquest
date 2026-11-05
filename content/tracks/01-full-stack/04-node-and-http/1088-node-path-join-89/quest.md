---
slug: "node-path-join-89"
title: "Node Drill: path.join and path.resolve #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('users', 'dist', 'api', '../public')\n```","options":["`users/dist/api/../public`","`users/dist/public/`","`users/dist/public`","`/users/dist/api/public`"],"answer":2,"explanation":"Node returns `users/dist/public`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', '..', 'public')\n```","options":["`public`","`public/`","`/routes/public`","`routes/../public`"],"answer":0,"explanation":"Node returns `public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('lib', './config', 'images', 'utils')\n```","options":["`lib/./config/images/utils`","`app/lib/config/images/utils`","`lib/config/images/utils/`","`/app/lib/config/images/utils`"],"answer":3,"explanation":"Node returns `/app/lib/config/images/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('routes', 'images', '..')\n```","options":["`routes/`","`routes/images/..`","`/routes/images/`","`routes`"],"answer":3,"explanation":"Node returns `routes`."},{"prompt":"What does this return?\n\n```js\npath.join('public', 'app.ts', 'db', 'dist')\n```","options":["`/public/app.ts/db/dist`","`public/app.ts/db/dist`","`public/app.ts/db/dist/`"],"answer":1,"explanation":"Node returns `public/app.ts/db/dist`."}]
---
# Node Drill: path.join and path.resolve #89

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
