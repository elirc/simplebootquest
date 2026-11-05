---
slug: "node-path-parts-86"
title: "Node Drill: Parsing file paths #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"What does `path.extname(\"/api/notes.md\")` return?","options":["`/api`","`notes`","`.md`","`notes.md`"],"answer":2,"explanation":"It returns `.md`."},{"prompt":"What does `path.basename(\"/config/dist/server.mjs\")` return?","options":["`server.mjs`","`/config/dist`","`.mjs`","`server`"],"answer":0,"explanation":"It returns `server.mjs`."},{"prompt":"What does `path.dirname(\"/api/users/.env\")` return?","options":["`.env`","`''`","`/api/users`"],"answer":2,"explanation":"It returns `/api/users`."},{"prompt":"What does `path.extname(\"/dist/api/server.mjs\")` return?","options":["`server`","`/dist/api`","`server.mjs`","`.mjs`"],"answer":3,"explanation":"It returns `.mjs`."},{"prompt":"What does `path.dirname(\"/tests/routes/api/app.ts\")` return?","options":["`app`","`/tests/routes/api`","`.ts`","`app.ts`"],"answer":1,"explanation":"It returns `/tests/routes/api`."}]
---
# Node Drill: Parsing file paths #86

`path.basename`, `path.dirname` and `path.extname` pull a path apart. Note that `extname` only returns the **last** extension, and dotfiles like `.env` have no extension.
