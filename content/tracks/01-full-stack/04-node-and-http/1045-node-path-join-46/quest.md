---
slug: "node-path-join-46"
title: "Node Drill: path.join and path.resolve #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('utils', './dist', 'images')\n```","options":["`/utils/./dist/images`","`utils/dist/images/`","`utils/dist/images`","`utils/./dist/images`"],"answer":2,"explanation":"Node returns `utils/dist/images`."},{"prompt":"What does this return?\n\n```js\npath.join('archive.tar.gz', 'src', 'db')\n```","options":["`/archive.tar.gz/src/db`","`archive.tar.gz/src/db`","`archive.tar.gz/src/db/`"],"answer":1,"explanation":"Node returns `archive.tar.gz/src/db`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('api', 'src', '.env')\n```","options":["`app/api/src/.env`","`/app/api/src/.env`","`api/src/.env/`","`api/src/.env`"],"answer":1,"explanation":"Node returns `/app/api/src/.env`."},{"prompt":"What does this return?\n\n```js\npath.join('public', '..', 'config', 'images')\n```","options":["`config/images/`","`config/images`","`public/../config/images`","`/public/config/images`"],"answer":1,"explanation":"Node returns `config/images`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('tests', 'styles.css', 'api', 'db')\n```","options":["`tests/styles.css/api/db/`","`/app/tests/styles.css/api/db`","`tests/styles.css/api/db`","`app/tests/styles.css/api/db`"],"answer":1,"explanation":"Node returns `/app/tests/styles.css/api/db`."}]
---
# Node Drill: path.join and path.resolve #46

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
