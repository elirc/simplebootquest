---
slug: "node-path-join-37"
title: "Node Drill: path.join and path.resolve #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('./db', 'dist', 'users')\n```","options":["`db/dist/users`","`./db/dist/users`","`/./db/dist/users`","`db/dist/users/`"],"answer":0,"explanation":"Node returns `db/dist/users`."},{"prompt":"What does this return?\n\n```js\npath.join('config', 'routes', '../images', 'public')\n```","options":["`/config/routes/images/public`","`config/routes/../images/public`","`config/images/public/`","`config/images/public`"],"answer":3,"explanation":"Node returns `config/images/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('.', 'src', 'lib', 'users')\n```","options":["`./src/lib/users`","`src/lib/users/`","`/app/src/lib/users`","`app/src/lib/users`"],"answer":2,"explanation":"Node returns `/app/src/lib/users`."},{"prompt":"What does this return?\n\n```js\npath.join('..', 'src', 'lib', 'dist')\n```","options":["`../src/lib/dist/`","`/src/lib/dist`","`../src/lib/dist`"],"answer":2,"explanation":"Node returns `../src/lib/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'config', 'archive.tar.gz')\n```","options":["`api/config/archive.tar.gz/`","`app/api/config/archive.tar.gz`","`/app/api/config/archive.tar.gz`","`api/config/archive.tar.gz`"],"answer":2,"explanation":"Node returns `/app/api/config/archive.tar.gz`."}]
---
# Node Drill: path.join and path.resolve #37

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
