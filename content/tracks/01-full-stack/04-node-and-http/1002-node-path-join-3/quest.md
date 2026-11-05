---
slug: "node-path-join-3"
title: "Node Drill: path.join and path.resolve #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('data.json', 'routes', 'images', 'dist')\n```","options":["`data.json/routes/images/dist`","`/data.json/routes/images/dist`","`data.json/routes/images/dist/`"],"answer":0,"explanation":"Node returns `data.json/routes/images/dist`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('./public', 'api', 'public')\n```","options":["`/app/public/api/public`","`public/api/public/`","`app/public/api/public`","`./public/api/public`"],"answer":0,"explanation":"Node returns `/app/public/api/public`."},{"prompt":"What does this return?\n\n```js\npath.join('../tests', 'utils', 'dist', 'images')\n```","options":["`../tests/utils/dist/images/`","`/tests/utils/dist/images`","`../tests/utils/dist/images`"],"answer":2,"explanation":"Node returns `../tests/utils/dist/images`."},{"prompt":"What does this return?\n\n```js\npath.join('api', 'src', 'utils', './images')\n```","options":["`api/src/utils/images/`","`api/src/utils/./images`","`api/src/utils/images`","`/api/src/utils/./images`"],"answer":2,"explanation":"Node returns `api/src/utils/images`."},{"prompt":"What does this return?\n\n```js\npath.join('./utils', 'tests', 'dist', 'images')\n```","options":["`./utils/tests/dist/images`","`utils/tests/dist/images`","`/./utils/tests/dist/images`","`utils/tests/dist/images/`"],"answer":1,"explanation":"Node returns `utils/tests/dist/images`."}]
---
# Node Drill: path.join and path.resolve #3

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
