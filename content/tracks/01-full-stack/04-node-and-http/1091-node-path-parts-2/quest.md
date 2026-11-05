---
slug: "node-path-parts-2"
title: "Node Drill: Parsing file paths #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.basename(\"/dist/users/api/notes.md\")` return?","options":["`/dist/users/api`","`notes.md`","`notes`","`.md`"],"answer":1,"explanation":"It returns `notes.md`."},{"prompt":"What does `path.basename(\"/config/dist/users/server.mjs\")` return?","options":["`server.mjs`","`server`","`/config/dist/users`","`.mjs`"],"answer":0,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.extname(\"/tests/config/routes/index.js\")` return?","options":["`/tests/config/routes`","`index.js`","`.js`","`index`"],"answer":2,"explanation":"It returns `.js`."},{"prompt":"What does `path.extname(\"/db/app.ts\")` return?","options":["`app`","`/db`","`app.ts`","`.ts`"],"answer":3,"explanation":"It returns `.ts`."},{"prompt":"What does `path.basename(\"/config/utils/api/styles.css\")` return?","options":["`/config/utils/api`","`styles.css`","`.css`","`styles`"],"answer":1,"explanation":"It returns `styles.css`."}]
---
# Node Drill: Parsing file paths #2

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
