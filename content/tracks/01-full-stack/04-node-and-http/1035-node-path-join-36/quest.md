---
slug: "node-path-join-36"
title: "Node Drill: path.join and path.resolve #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('images', 'lib', '../api')\n```","options":["`images/api/`","`/images/lib/api`","`images/lib/../api`","`images/api`"],"answer":3,"explanation":"Node returns `images/api`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('db', '..', 'routes', 'lib')\n```","options":["`routes/lib/`","`/app/routes/lib`","`db/../routes/lib`","`app/routes/lib`"],"answer":1,"explanation":"Node returns `/app/routes/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', './config', 'lib')\n```","options":["`/app/tests/config/lib`","`tests/./config/lib`","`app/tests/config/lib`","`tests/config/lib/`"],"answer":0,"explanation":"Node returns `/app/tests/config/lib`."},{"prompt":"What does this return?\n\n```js\npath.join('styles.css', 'config', 'images')\n```","options":["`styles.css/config/images/`","`/styles.css/config/images`","`styles.css/config/images`"],"answer":2,"explanation":"Node returns `styles.css/config/images`."},{"prompt":"What does this return?\n\n```js\npath.join('public', '../images', 'src')\n```","options":["`public/../images/src`","`/public/images/src`","`images/src`","`images/src/`"],"answer":2,"explanation":"Node returns `images/src`."}]
---
# Node Drill: path.join and path.resolve #36

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
