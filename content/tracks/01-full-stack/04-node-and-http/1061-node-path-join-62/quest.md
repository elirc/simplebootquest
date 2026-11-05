---
slug: "node-path-join-62"
title: "Node Drill: path.join and path.resolve #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('./dist', 'images', 'routes', 'utils')\n```","options":["`/./dist/images/routes/utils`","`dist/images/routes/utils/`","`./dist/images/routes/utils`","`dist/images/routes/utils`"],"answer":3,"explanation":"Node returns `dist/images/routes/utils`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'users', 'routes', 'public')\n```","options":["`/./users/routes/public`","`users/routes/public`","`users/routes/public/`","`./users/routes/public`"],"answer":1,"explanation":"Node returns `users/routes/public`."},{"prompt":"What does this return?\n\n```js\npath.join('./api', 'src', 'dist')\n```","options":["`api/src/dist/`","`./api/src/dist`","`api/src/dist`","`/./api/src/dist`"],"answer":2,"explanation":"Node returns `api/src/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./routes', 'users', 'config')\n```","options":["`app/routes/users/config`","`/app/routes/users/config`","`./routes/users/config`","`routes/users/config/`"],"answer":1,"explanation":"Node returns `/app/routes/users/config`."},{"prompt":"What does this return?\n\n```js\npath.join('../users', 'tests', 'utils')\n```","options":["`/users/tests/utils`","`../users/tests/utils/`","`../users/tests/utils`"],"answer":2,"explanation":"Node returns `../users/tests/utils`."}]
---
# Node Drill: path.join and path.resolve #62

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
