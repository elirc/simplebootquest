---
slug: "node-path-join-31"
title: "Node Drill: path.join and path.resolve #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('config', 'images', '.')\n```","options":["`config/images/`","`/config/images/.`","`config/images`","`config/images/.`"],"answer":2,"explanation":"Node returns `config/images`."},{"prompt":"What does this return?\n\n```js\npath.join('../routes', 'api', 'config', 'dist')\n```","options":["`../routes/api/config/dist/`","`../routes/api/config/dist`","`/routes/api/config/dist`"],"answer":1,"explanation":"Node returns `../routes/api/config/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('users', 'archive.tar.gz', 'routes', 'public')\n```","options":["`users/archive.tar.gz/routes/public`","`/app/users/archive.tar.gz/routes/public`","`users/archive.tar.gz/routes/public/`","`app/users/archive.tar.gz/routes/public`"],"answer":1,"explanation":"Node returns `/app/users/archive.tar.gz/routes/public`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', '.', 'config')\n```","options":["`tests/./config`","`app/tests/config`","`tests/config/`","`/app/tests/config`"],"answer":3,"explanation":"Node returns `/app/tests/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('routes', '..', 'images')\n```","options":["`app/images`","`routes/../images`","`/app/images`","`images/`"],"answer":2,"explanation":"Node returns `/app/images`."}]
---
# Node Drill: path.join and path.resolve #31

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
