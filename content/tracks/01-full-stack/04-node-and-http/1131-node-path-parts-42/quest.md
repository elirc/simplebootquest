---
slug: "node-path-parts-42"
title: "Node Drill: Parsing file paths #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.dirname(\"/utils/schema.prisma\")` return?","options":["`schema.prisma`","`.prisma`","`/utils`","`schema`"],"answer":2,"explanation":"It returns `/utils`."},{"prompt":"What does `path.basename(\"/utils/api/notes.md\")` return?","options":["`.md`","`/utils/api`","`notes`","`notes.md`"],"answer":3,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.dirname(\"/config/utils/routes/app.ts\")` return?","options":["`/config/utils/routes`","`.ts`","`app`","`app.ts`"],"answer":0,"explanation":"It returns `/config/utils/routes`."},{"prompt":"What does `path.extname(\"/db/routes/config/schema.prisma\")` return?","options":["`/db/routes/config`","`schema.prisma`","`.prisma`","`schema`"],"answer":2,"explanation":"It returns `.prisma`."},{"prompt":"What does `path.basename(\"/src/users/server.mjs\")` return?","options":["`.mjs`","`/src/users`","`server.mjs`","`server`"],"answer":2,"explanation":"It returns `server.mjs`."}]
---
# Node Drill: Parsing file paths #42

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
