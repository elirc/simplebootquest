---
slug: "node-path-join-11"
title: "Node Drill: path.join and path.resolve #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does this return?\n\n```js\npath.join('images', 'archive.tar.gz', 'src')\n```","options":["`images/archive.tar.gz/src`","`/images/archive.tar.gz/src`","`images/archive.tar.gz/src/`"],"answer":0,"explanation":"Node returns `images/archive.tar.gz/src`."},{"prompt":"What does this return?\n\n```js\npath.join('.', 'public', 'utils', 'db')\n```","options":["`public/utils/db`","`public/utils/db/`","`./public/utils/db`","`/./public/utils/db`"],"answer":0,"explanation":"Node returns `public/utils/db`."},{"prompt":"What does this return?\n\n```js\npath.join('notes.md', 'images', 'users', 'config')\n```","options":["`notes.md/images/users/config`","`/notes.md/images/users/config`","`notes.md/images/users/config/`"],"answer":0,"explanation":"Node returns `notes.md/images/users/config`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('../api', 'api', 'users', 'lib')\n```","options":["`../api/api/users/lib/`","`api/api/users/lib`","`/api/api/users/lib`","`../api/api/users/lib`"],"answer":2,"explanation":"Node returns `/api/api/users/lib`."},{"prompt":"What does this return?\n\n```js\n// process.cwd() is '/app'\npath.resolve('.', 'images', 'api')\n```","options":["`app/images/api`","`images/api/`","`./images/api`","`/app/images/api`"],"answer":3,"explanation":"Node returns `/app/images/api`."}]
---
# Node Drill: path.join and path.resolve #11

`path.join` glues segments and normalises `.` and `..`. `path.resolve` builds an **absolute** path, starting from `process.cwd()` unless a segment is already absolute. Never build paths with string concatenation. These answers come from Node's own `path` module (POSIX).
