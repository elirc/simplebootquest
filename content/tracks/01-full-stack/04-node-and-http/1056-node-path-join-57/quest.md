---
slug: "node-path-join-57"
title: "Node Drill: path.join and path.resolve #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('images', '../users', 'routes', 'users')\n```","options":["`/images/users/routes/users`","`users/routes/users`","`images/../users/routes/users`","`users/routes/users/`"],"answer":1,"explanation":"Node returns `users/routes/users`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./users', 'config', 'db')\n```","options":["`./users/config/db`","`app/users/config/db`","`users/config/db/`","`/app/users/config/db`"],"answer":3,"explanation":"Node returns `/app/users/config/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('public', 'dist', '../images')\n```","options":["`app/public/images`","`/app/public/images`","`public/dist/../images`","`public/images/`"],"answer":1,"explanation":"Node returns `/app/public/images`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', 'dist', 'data.json')\n```","options":["`db/dist/data.json`","`/app/db/dist/data.json`","`app/db/dist/data.json`","`db/dist/data.json/`"],"answer":1,"explanation":"Node returns `/app/db/dist/data.json`."},{"prompt":"What does this return?\n\n```js\npath.join('src', 'config', 'api', '.')\n```","options":["`src/config/api/.`","`src/config/api/`","`/src/config/api/.`","`src/config/api`"],"answer":3,"explanation":"Node returns `src/config/api`."}]
---
# Node Drill: path.join and path.resolve #57

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
