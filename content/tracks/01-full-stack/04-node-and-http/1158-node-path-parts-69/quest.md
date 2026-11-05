---
slug: "node-path-parts-69"
title: "Node Drill: Parsing file paths #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/api/routes/schema.prisma\")` return?","options":["`schema.prisma`","`/api/routes`","`schema`","`.prisma`"],"answer":0,"explanation":"It returns `schema.prisma`."},{"prompt":"What does `path.basename(\"/tests/routes/db/styles.css\")` return?","options":["`styles.css`","`.css`","`styles`","`/tests/routes/db`"],"answer":0,"explanation":"It returns `styles.css`."},{"prompt":"What does `path.basename(\"/users/utils/lib/server.mjs\")` return?","options":["`/users/utils/lib`","`server.mjs`","`.mjs`","`server`"],"answer":1,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.extname(\"/db/tests/notes.md\")` return?","options":["`notes.md`","`/db/tests`","`notes`","`.md`"],"answer":3,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/dist/tests/api/app.ts\")` return?","options":["`app`","`app.ts`","`.ts`","`/dist/tests/api`"],"answer":1,"explanation":"It returns `app.ts`."}]
---
# Node Drill: Parsing file paths #69

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
