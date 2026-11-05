---
slug: "node-path-parts-79"
title: "Node Drill: Parsing file paths #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/tests/utils/server.mjs\")` return?","options":["`/tests/utils`","`.mjs`","`server.mjs`","`server`"],"answer":0,"explanation":"It returns `/tests/utils`."},{"prompt":"What does `path.dirname(\"/routes/config/db/server.mjs\")` return?","options":["`server`","`/routes/config/db`","`server.mjs`","`.mjs`"],"answer":1,"explanation":"It returns `/routes/config/db`."},{"prompt":"What does `path.dirname(\"/users/public/api/notes.md\")` return?","options":["`.md`","`notes.md`","`/users/public/api`","`notes`"],"answer":2,"explanation":"It returns `/users/public/api`."},{"prompt":"What does `path.dirname(\"/lib/server.mjs\")` return?","options":["`server`","`server.mjs`","`.mjs`","`/lib`"],"answer":3,"explanation":"It returns `/lib`."},{"prompt":"What does `path.extname(\"/config/utils/lib/schema.prisma\")` return?","options":["`schema.prisma`","`schema`","`/config/utils/lib`","`.prisma`"],"answer":3,"explanation":"It returns `.prisma`."}]
---
# Node Drill: Parsing file paths #79

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
