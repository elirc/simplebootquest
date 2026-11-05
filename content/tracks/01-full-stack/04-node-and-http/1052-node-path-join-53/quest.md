---
slug: "node-path-join-53"
title: "Node Drill: path.join and path.resolve #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('.', 'users', 'dist')\n```","options":["`users/dist/`","`users/dist`","`./users/dist`","`/./users/dist`"],"answer":1,"explanation":"Node returns `users/dist`."},{"prompt":"What does this return?\n\n```js\npath.join('./tests', 'routes', 'src')\n```","options":["`/./tests/routes/src`","`./tests/routes/src`","`tests/routes/src/`","`tests/routes/src`"],"answer":3,"explanation":"Node returns `tests/routes/src`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('dist', 'public', '.')\n```","options":["`dist/public/.`","`dist/public/`","`/app/dist/public`","`app/dist/public`"],"answer":2,"explanation":"Node returns `/app/dist/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'public', '.', 'utils')\n```","options":["`app/db/public/utils`","`db/public/./utils`","`/app/db/public/utils`","`db/public/utils/`"],"answer":2,"explanation":"Node returns `/app/db/public/utils`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('config', 'users', '..', 'public')\n```","options":["`app/config/public`","`/app/config/public`","`config/public/`","`config/users/../public`"],"answer":1,"explanation":"Node returns `/app/config/public`."}]
---
# Node Drill: path.join and path.resolve #53

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
