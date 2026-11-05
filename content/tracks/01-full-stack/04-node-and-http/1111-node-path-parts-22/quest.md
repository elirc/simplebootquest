---
slug: "node-path-parts-22"
title: "Node Drill: Parsing file paths #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/dist/users/schema.prisma\")` return?","options":["`/dist/users`","`.prisma`","`schema`","`schema.prisma`"],"answer":3,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.dirname(\"/api/db/lib/server.mjs\")` return?","options":["`.mjs`","`/api/db/lib`","`server`","`server.mjs`"],"answer":1,"explanation":"It returns `/api/db/lib`."},{"prompt":"What does `path.extname(\"/images/notes.md\")` return?","options":["`notes`","`notes.md`","`.md`","`/images`"],"answer":2,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/lib/index.js\")` return?","options":["`index.js`","`index`","`.js`","`/lib`"],"answer":0,"explanation":"It returns `index.js`."},{"prompt":"What does `path.extname(\"/api/dist/schema.prisma\")` return?","options":["`.prisma`","`/api/dist`","`schema.prisma`","`schema`"],"answer":0,"explanation":"It returns `.prisma`."}]
---
# Node Drill: Parsing file paths #22

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
