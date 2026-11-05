---
slug: "node-path-join-74"
title: "Node Drill: path.join and path.resolve #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('src', 'lib', 'users', '.')\n```","options":["`src/lib/users/`","`src/lib/users`","`src/lib/users/.`","`/src/lib/users/.`"],"answer":1,"explanation":"Node returns `src/lib/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('utils', '.', 'users')\n```","options":["`utils/users/`","`utils/./users`","`app/utils/users`","`/app/utils/users`"],"answer":3,"explanation":"Node returns `/app/utils/users`."},{"prompt":"What does this return?\n\n```js\npath.join('utils', 'src', 'images', '.')\n```","options":["`utils/src/images`","`/utils/src/images/.`","`utils/src/images/.`","`utils/src/images/`"],"answer":0,"explanation":"Node returns `utils/src/images`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', '.', 'dist', 'routes')\n```","options":["`/app/api/dist/routes`","`api/dist/routes/`","`app/api/dist/routes`","`api/./dist/routes`"],"answer":0,"explanation":"Node returns `/app/api/dist/routes`."},{"prompt":"What does this return?\n\n```js\npath.join('../public', 'api', 'tests')\n```","options":["`../public/api/tests/`","`../public/api/tests`","`/public/api/tests`"],"answer":1,"explanation":"Node returns `../public/api/tests`."}]
---
# Node Drill: path.join and path.resolve #74

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
